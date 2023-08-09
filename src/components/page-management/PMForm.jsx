import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slices/modalSlice';
import { duplicateList } from '../../store/slices/menuSlice';

const PMForm = ({ targetList }) => {
	const titleRef = useRef('');
	const linkRef = useRef('');
	const dispatch = useDispatch();

	return (
		<div>
			<input type="text" name="duplicatedTitle" ref={titleRef} />
			<input type="text" name="duplicatedLink" ref={linkRef} />
			<div>
				<button
					type="button"
					onClick={() => dispatch(toggleModal({ name: '' }))}
				>
					닫기
				</button>
				<button
					type="button"
					onClick={() =>
						dispatch(
							duplicateList({
								duplicatedKey: targetList.key,
								newTitle: titleRef.current.value,
								newLink: linkRef.current.value,
							})
						)
					}
				>
					저장
				</button>
			</div>
		</div>
	);
};

export default PMForm;

PMForm.propTypes = {
	name: PropTypes.string,
	targetList: PropTypes.object,
};
