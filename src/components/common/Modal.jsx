/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ContainerLayout from '../container/ContainerLayout';

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
	width: 80%;
	height: 80%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	background-color: #fff;
`;

const Backdrop = ({ onClose }) => {
	return <StyledBackdrop onClick={onClose} />;
};

const Overlay = ({ children }) => {
	return <StyledOverlay>{children}</StyledOverlay>;
};

const Modal = ({ onClose }) => {
  return (
    <Fragment>
      {createPortal(
        <Overlay>
          <ContainerLayout type={'container_one'} />
          <ContainerLayout type={'container_two'} />
          <ContainerLayout type={'container_three'} />
          <ContainerLayout type={'container_four'} />
        </Overlay>,
        document.getElementById('modal')
      )}
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('modal')
      )}
    </Fragment>
  );
};

export default Modal;
