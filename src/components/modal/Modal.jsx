import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slices/modalSlice';

const Overlay = ({ children }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<button
				type="button"
				onClick={() =>
					dispatch(
						toggleModal({
							name: '',
						})
					)
				}
			>
				❌
			</button>
			{children}
		</div>
	);
};

const Modal = ({ children }) => {
	return createPortal(
		<Overlay>{children}</Overlay>,
		document.getElementById('modal')
	);
};

export default Modal;

Overlay.propTypes = {
	children: PropTypes.node,
};
