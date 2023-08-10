import PropTypes from 'prop-types';
<<<<<<< HEAD
import { useRef, Fragment } from 'react';
=======
import { useRef } from 'react';
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { toggleModal } from '../../store/slices/modalSlice';
<<<<<<< HEAD
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
=======
import { duplicateList } from '../../store/slices/menuSlice';
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af

const StyledPMForm = styled.div`
	width: 30rem;
	border-radius: 1rem;
`;

const StyledModalTitle = styled.h3`
	padding-left: 2rem;
`;

const InputContaier = styled.div`
	padding: 0 2rem 1rem 2rem;
	display: flex;
	flex-direction: column;
`;

const PMInput = styled.input`
	padding: 1rem;
	margin: 1rem 0;
	border: 1px solid ${(props) => props.theme.colors.gray.darker};
	border-radius: 0.5rem;
	background-color: ${(props) => props.theme.colors.gray.lighter};

	&:focus {
		border: 1px solid ${(props) => props.theme.colors.orange};
	}

	&::placeholder {
		color: #fff;
	}
`;

const BtnContainer = styled.div`
	display: flex;
`;

const Btn = styled.button`
	padding: 0.7rem 0;
	width: 100%;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;

	&:nth-of-type(1) {
		background-color: ${(props) => props.theme.colors.gray.darker};
	}
	&:nth-of-type(2) {
		background-color: ${(props) => props.theme.colors.orange};
	}
`;

const PMForm = ({ targetList }) => {
	const titleRef = useRef('');
	const linkRef = useRef('');
	const dispatch = useDispatch();

	return (
<<<<<<< HEAD
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
=======
		<StyledPMForm>
			<StyledModalTitle>페이지 복제</StyledModalTitle>
			<InputContaier>
				<PMInput
					type="text"
					name="duplicatedTitle"
					ref={titleRef}
					placeholder="페이지명"
				/>
				<PMInput
					type="text"
					name="duplicatedLink"
					ref={linkRef}
					placeholder="링크명"
				/>
			</InputContaier>
			<BtnContainer>
				<Btn type="button" onClick={() => dispatch(toggleModal({ name: '' }))}>
					닫기
				</Btn>
				<Btn
					type="button"
					onClick={() => {
						dispatch(
							duplicateList({
								duplicatedKey: targetList.key,
								newTitle: titleRef.current.value,
								newLink: linkRef.current.value,
							})
						);
						dispatch(toggleModal({ name: '' }));
					}}
				>
					저장
				</Btn>
			</BtnContainer>
		</StyledPMForm>
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
	);
};

export default PMForm;

PMForm.propTypes = {
	name: PropTypes.string,
	targetList: PropTypes.object,
};
