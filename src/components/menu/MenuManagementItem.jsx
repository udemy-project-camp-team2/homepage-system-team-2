import PropTypes from 'prop-types';
import { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateList, deleteList } from '../../store/slices/menuSlice';

const MenuManagementItem = ({ list, targetKey }) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const titleRef = useRef('');
	const linkRef = useRef('');
	const dispatch = useDispatch();

	const updateListHandler = () => {
		dispatch(
			updateList({
				key: targetKey,
				id: list.id,
				newTitle: titleRef.current.value || list.title,
				newLink: linkRef.current.value || list.link,
			})
		);
	};

	return (
		<li>
			<div>
				<span>{list.title}</span>
				<button type="button" onClick={() => setIsDetailOpen((prev) => !prev)}>
					수정
				</button>
				<button
					type="button"
					onClick={() =>
						dispatch(
							deleteList({
								key: targetKey,
								id: list.id,
							})
						)
					}
				>
					삭제
				</button>
			</div>
			{isDetailOpen ? (
				<div>
					<input
						ref={titleRef}
						type="text"
						style={{ display: 'block' }}
						placeholder={list.title}
					/>
					<input
						ref={linkRef}
						type="text"
						style={{ display: 'block' }}
						placeholder={list.link}
					/>
					<button type="button" onClick={updateListHandler}>
						완료
					</button>
					<button type="button" onClick={() => setIsDetailOpen(false)}>
						취소
					</button>
				</div>
			) : null}
		</li>
	);
};

export default memo(MenuManagementItem);

MenuManagementItem.propTypes = {
	list: PropTypes.object,
	targetKey: PropTypes.string,
};
