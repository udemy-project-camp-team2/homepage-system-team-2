import PropTypes from 'prop-types';
import MenuManagementItem from './MenuManagementItem';
import { Fragment, memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMenu, updateMenu } from '../../store/slices/menuSlice';

const MenuManagementList = ({ title, lists }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMenuEdit, setIsMenuEdit] = useState(false);
	const menuTitleRef = useRef('');
	const dispatch = useDispatch();

	return (
		<article>
			<div>
				{isMenuEdit ? (
					<Fragment>
						<input ref={menuTitleRef} type="text" />
						<button
							type="button"
							onClick={() =>
								dispatch(
									updateMenu({
										key: title,
										newKey: menuTitleRef.current.value,
									})
								)
							}
						>
							완료
						</button>
						<button type="button" onClick={() => setIsMenuEdit(false)}>
							취소
						</button>
					</Fragment>
				) : (
					<Fragment>
						<em
							style={{ fontWeight: 700 }}
							onClick={() => setIsOpen((prev) => !prev)}
						>
							{title}
						</em>

						<button type="button" onClick={() => setIsMenuEdit(true)}>
							수정
						</button>
						<button
							type="button"
							onClick={() => dispatch(deleteMenu({ key: title }))}
						>
							삭제
						</button>
					</Fragment>
				)}
			</div>
			{isOpen ? (
				<ul>
					{lists.map((list) => (
						<MenuManagementItem
							key={list.title}
							list={list}
							targetKey={title}
						/>
					))}
				</ul>
			) : null}
		</article>
	);
};

export default memo(MenuManagementList);

MenuManagementList.propTypes = {
	title: PropTypes.string,
	lists: PropTypes.array,
};
