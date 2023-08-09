import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { toggleModal } from '../../store/slices/modalSlice';

const Td = styled.td`
	padding: 1rem 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray.darker};
	text-align: center;
`;

const MenuDetailBtns = styled.button`
	margin: 0 0.2rem;
	background-color: ${(props) => props.theme.colors.orange};
	color: #fff;
	border: none;
	border-radius: 0.3rem;
	outline: none;
	cursor: pointer;
`;

const PMTableRow = ({ list }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	return (
		<tr>
			<Td>
				<input type="checkbox" name="checkbox" />
			</Td>
			<Td>{list.title}</Td>
			<Td>{list.link}</Td>
			<Td>{list.key}</Td>
			<Td>{new Date().toLocaleString()}</Td>
			<Td>
				<MenuDetailBtns
					type="button"
					onClick={() =>
						dispatch(
							toggleModal({
								list,
								name: '상세',
							})
						)
					}
				>
					상세
				</MenuDetailBtns>
				<MenuDetailBtns
					type="button"
					onClick={() =>
						dispatch(
							toggleModal({
								title: list.title,
								name: '복제',
							})
						)
					}
				>
					복제
				</MenuDetailBtns>
				<MenuDetailBtns
					type="button"
					onClick={() => navigate(`/admin/edit${list.link}`)}
				>
					디자인
				</MenuDetailBtns>
			</Td>
		</tr>
	);
};

export default memo(PMTableRow);

PMTableRow.propTypes = {
	list: PropTypes.object,
};
