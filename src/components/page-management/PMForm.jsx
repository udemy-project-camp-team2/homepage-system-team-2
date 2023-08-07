import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slices/modalSlice';

const PMForm = ({ name, targetList }) => {
	const linkRef = useRef('');
	const dispatch = useDispatch();

	console.log(targetList);
	return (
		<div>
			<input
				type="text"
				value={targetList.title}
				onChange={(e) => console.log(e.target.value)}
			/>
			<input
				type="text"
				ref={linkRef}
				value={name === '상세' ? '' : ''}
				onChange={(e) => console.log(e.target.value)}
				readOnly={name === '상세' ? true : false}
				disabled={name === '상세' ? true : false}
			/>
			<div>
				<button
					type="button"
					onClick={() => dispatch(toggleModal({ name: '' }))}
				>
					닫기
				</button>
				<button type="button">저장</button>
			</div>
		</div>
	);
};

export default PMForm;

PMForm.propTypes = {
	name: PropTypes.string,
	targetList: PropTypes.object,
};
