import { useRef } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from '../../store/hooks';
import { toggleModal } from '../../store/slices/modalSlice';
import { duplicateList } from '../../store/slices/menuSlice';

interface PMFormProps {
	targetList: {
		key: string;
		id: string;
		title: string;
		link: string;
	};
}

const StyledPMForm = styled.div`
	width: 30rem;
	border-radius: 1rem;
	background-color: #fff;
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
	width: 100%;
	padding: 1rem 0.8rem;
	margin-bottom: 0.8rem;
	background-color: ${(props) => props.theme.colors.gray.lighter};
	border: none;
	border-radius: 10px;

	&:focus {
		border: 1px solid ${(props) => props.theme.colors.orange};
	}

	&::placeholder {
		color: #fff;
	}
`;

const BtnContainer = styled.div`
	display: flex;

	button:nth-child(1) {
		border-radius: 0 0 0 10px;
		background-color: ${(props) => props.theme.colors.gray.close};
	}

	button:nth-child(2) {
		border-radius: 0 0 10px 0;
		background-color: ${(props) => props.theme.colors.orange};
	}
`;

const Btn = styled.button`
	padding: 1rem 0;
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

const ModalContainer = styled.div`
	background-color: #fff;
	padding: 1rem;
	border-radius: 10px 10px 0 0;
`;

const PMForm = ({ targetList }: PMFormProps) => {
	const titleRef = useRef<HTMLInputElement | null>(null);
	const linkRef = useRef<HTMLInputElement | null>(null);
	const dispatch = useDispatch();

	return (
		<StyledPMForm>
			<ModalContainer>
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
			</ModalContainer>
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
								newTitle: (titleRef.current as HTMLInputElement).value,
								newLink: (linkRef.current as HTMLInputElement).value,
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
