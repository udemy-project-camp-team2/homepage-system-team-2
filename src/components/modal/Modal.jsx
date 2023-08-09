import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleModal } from '../../store/slices/modalSlice';

const StyledBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
`;

const ModalCloseBtn = styled.button`
	position: absolute;
	right: 0;
	background-color: transparent;
	border: none;
	outline: none;
	transition: background-color 0.2s linear;
	cursor: pointer;
	&:hover {
		background-color: #fff;
	}
`;

const StyledOverlay = styled.div`
	width: 614px;
	height: 316px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 50;
`;

const Backdrop = () => {
	const dispatch = useDispatch();
	return (
		<StyledBackdrop
			onClick={() =>
				dispatch(
					toggleModal({
						name: '',
					})
				)
			}
		/>
	);
};

const Overlay = ({ children }) => {
	const dispatch = useDispatch();
	return (
		<StyledOverlay>
			<ModalCloseBtn
				type="button"
				onClick={() =>
					dispatch(
						toggleModal({
							name: '',
						})
					)
				}
			>
			</ModalCloseBtn>
			{children}
		</StyledOverlay>
	);
};

const portalElement = document.getElementById('modal');

const Modal = ({ children }) => {
	return (
		<Fragment>
			{createPortal(<Overlay>{children}</Overlay>, portalElement)}
			{createPortal(<Backdrop />, portalElement)}
		</Fragment>
	);
};

export default Modal;

Overlay.propTypes = {
	children: PropTypes.node,
};

Modal.propTypes = {
	children: PropTypes.node,
};
