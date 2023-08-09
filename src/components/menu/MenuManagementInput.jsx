import PropTypes from 'prop-types';
import { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, addMenu } from '../../store/slices/menuSlice';

import styled from 'styled-components';


const InputForm = styled.form`
	display: flex;
`;

const InputWrapper = styled.article`
	display: flex;
  height: 40px;
`;

const Input = styled.input`
	width: 15rem;
	padding: 0.5rem;
	border: 1px solid ${(props) => props.theme.colors.orange};
	border-radius: 4px;
	margin-right: 1rem;
`;

const Button = styled.button`
	padding: 0.5rem 1rem;
	border: 1px solid transparent;
	border-radius: 4px 0 0 4px;
	background-color: ${(props) => props.theme.colors.orange};
	color: #fff;
	cursor: pointer;
`;

const ToggleButton = styled.button`
	padding: 0.5rem 1rem;
	border: 1px solid ${(props) =>
		props.isOpen ? props.theme.colors.orange : props.theme.colors.gray.lighter};
	border-radius: 0 4px 4px 0;
	background-color: #fff;
	color: #000;
	cursor: pointer;
	transition: border-color 0.3s ease-in-out; 
`;

const Select = styled.select`
	padding: 0.5rem;
	border: 1px solid ${(props) => props.theme.colors.orange};
	outline: 0;
	border-radius: 4px;
	margin-right: 0.5rem;
`;

const Option = styled.option`
	background-color: ${(props) => props.theme.colors.orange};
	color: #fff;
`;


const MenuManagementInput = ({ values }) => {
	const [isOpen, setIsOpen] = useState(false);
	const inputRef = useRef('');
	const selectRef = useRef('');
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		if (inputRef.current.value === '') {
			alert(`Please enter any words`);
			return;
		}

		if (!isOpen) {
			// 메뉴 추가
			dispatch(addMenu({ key: inputRef.current.value }));
			inputRef.current.value = '';
			return;
		}

		if (isOpen) {
			// 리스트 추가
			dispatch(
				addList({
					key: selectRef.current.value,
					listTitle: inputRef.current.value,
				})
			);
			inputRef.current.value = '';
			return;
		}
	};

	return (
		<InputWrapper>
			{isOpen ? (
				<Select ref={selectRef}>
					{values.map((value) => (
						<Option key={value} value={value}>
							{value}
						</Option>
					))}
				</Select>
			) : null}
			<InputForm onSubmit={submitHandler}>
				<Input ref={inputRef} type="text" placeholder="Enter text here" />
				<Button type="submit">작성</Button>
				<ToggleButton
					type="button"
					isOpen={isOpen}
					onClick={() => setIsOpen((prev) => !prev)}
				>
					리스트 작성
				</ToggleButton>
			</InputForm>
		</InputWrapper>
	);
};

export default memo(MenuManagementInput);

MenuManagementInput.propTypes = {
	values: PropTypes.array,
};
