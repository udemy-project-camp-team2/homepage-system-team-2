import { Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useDispatch } from '../../store/hooks';
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

const Overlay = ({ children }: { children: ReactNode }) => {
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
			></ModalCloseBtn>
			{children}
		</StyledOverlay>
	);
};

const portalElement = document.getElementById('modal') as HTMLElement;

const Modal = ({ children }: { children: ReactNode }) => {
	return (
		<Fragment>
			{createPortal(<Overlay>{children}</Overlay>, portalElement)}
			{createPortal(<Backdrop />, portalElement)}
		</Fragment>
	);
};

export default Modal;
