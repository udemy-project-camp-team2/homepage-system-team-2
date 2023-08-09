import PropTypes from 'prop-types';
import { useRef, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slices/modalSlice';
import { styled } from 'styled-components';

const ModalContainer = styled.div`
	background-color: #fff;
	padding: 1rem;
	border-radius: 10px 10px 0 0;
`

const ModalInput = styled.input`
	width: 100%;
	padding: 1rem .3rem;
	margin-bottom: .8rem;
	background-color: #f5f5f5;
	border: none;
	border-radius: 10px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		flex-grow: 1;
		border:none;
		padding: 1rem 0;
		font-weight: bold;
		color:#fff;
		cursor: pointer;
	}

	button:nth-child(1) {
		border-radius: 0 0 0 10px;
		background-color: ${(props) => props.theme.colors.gray.close};
	}

	button:nth-child(2) {
		border-radius: 0 0 10px 0;
		background-color: ${(props) => props.theme.colors.orange};
	}
`;

const PMForm = ({ name, targetList }) => {
	const linkRef = useRef('');
	const dispatch = useDispatch();

	console.log(targetList);
	return (
		<Fragment>
			<ModalContainer>
				<h3>
					{name === '상세' ? '페이지 상세' : '페이지 복제'}
				</h3>
				<ModalInput
					type="text"
					value={targetList.title}
					onChange={(e) => console.log(e.target.value)}
				/>
				<ModalInput
					type="text"
					ref={linkRef}
					value={name === '상세' ? '' : ''}
					onChange={(e) => console.log(e.target.value)}
					readOnly={name === '상세' ? true : false}
					disabled={name === '상세' ? true : false}
				/>
			</ModalContainer>
			<ButtonContainer>
				<button
					type="button"
					onClick={() => dispatch(toggleModal({ name: '' }))}
				>
					닫기
				</button>
				<button type="button">저장</button>
			</ButtonContainer>
		</Fragment>
	);
};

export default PMForm;

PMForm.propTypes = {
	name: PropTypes.string,
	targetList: PropTypes.object,
};
