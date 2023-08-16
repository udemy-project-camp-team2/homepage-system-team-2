import { Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
`;

const StyledOverlay = styled.div`
	padding: 1rem;
	width: 80%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	background-color: #fff;
`;

const Backdrop = ({ onClose }: { onClose: () => void }) => {
	return <StyledBackdrop onClick={onClose} />;
};

const Overlay = ({ children }: { children: ReactNode }) => {
	return <StyledOverlay>{children}</StyledOverlay>;
};

const Modal = ({
	children,
	onClose,
}: {
	children: ReactNode;
	onClose: () => void;
}) => {
	return (
		<Fragment>
			{createPortal(
				<Overlay>{children}</Overlay>,
				document.getElementById('modal') as HTMLElement
			)}
			{createPortal(
				<Backdrop onClose={onClose} />,
				document.getElementById('modal') as HTMLElement
			)}
		</Fragment>
	);
};

export default Modal;
