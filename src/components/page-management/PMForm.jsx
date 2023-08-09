import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { toggleModal } from '../../store/slices/modalSlice';
import { duplicateList } from '../../store/slices/menuSlice';

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
	);
};

export default PMForm;

PMForm.propTypes = {
	name: PropTypes.string,
	targetList: PropTypes.object,
};
