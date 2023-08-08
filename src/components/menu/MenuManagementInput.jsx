import PropTypes from 'prop-types';
import { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, addMenu } from '../../store/slices/menuSlice';

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
		<article>
			<form onSubmit={submitHandler} style={{ display: 'flex' }}>
				<input ref={inputRef} type="text" style={{ flexGrow: 1 }} />
				<button type="submit">작성</button>
				<button type="button" onClick={() => setIsOpen((prev) => !prev)}>
					리스트 작성
				</button>
			</form>
			{isOpen ? (
				<select ref={selectRef}>
					{values.map((value) => (
						<option key={value} value={value}>
							{value}
						</option>
					))}
				</select>
			) : null}
		</article>
	);
};

export default memo(MenuManagementInput);

MenuManagementInput.propTypes = {
	values: PropTypes.array,
};
