import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slices/modalSlice';
import { styled } from 'styled-components';

const CheckboxContainer = styled.td`
	position: relative; 
`;

const CheckboxInput = styled.input`
	appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

	&:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.colors.orange};
    border-color: ${(props) => props.theme.colors.orange};
  }
`;

const ManagementButton = styled.button`
	background-color: transparent;
	border: 1px solid ${(props) => props.theme.colors.gray.lighter};
	border-radius: 50px;
	padding: 0.3rem 0.8rem;
	margin-right: .5rem;
	font-weight: bold;
	color: ${(props) => props.theme.colors.gray.lighter};
	cursor: pointer;
`;

const DesignButton = styled.button`
	background-color: ${(props) => props.theme.colors.orange};
	border: 1px solid ${(props) => props.theme.colors.orange};
	border-radius: 50px;
	padding: .3rem .8rem;
	font-weight: bold;
	color: #fff;
	cursor: pointer;
`;

const PMTableRow = ({ list }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	return (
		<tr>
			<CheckboxContainer>
				<CheckboxInput type="checkbox" name="checkbox" />
			</CheckboxContainer>
			<td>{list.title}</td>
			<td>{list.link}</td>
			<td>
				<span>
					{list.key}
				</span>
			</td>
			<td>{new Date().toLocaleString()}</td>
			<td>
				<ManagementButton
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
				</ManagementButton>
				<ManagementButton
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
				</ManagementButton>
				<DesignButton	
					type="button" onClick={() => navigate('/admin/edit/1')}>
					디자인
				</DesignButton>
			</td>
		</tr>
	);
};

export default memo(PMTableRow);

PMTableRow.propTypes = {
	list: PropTypes.object,
};
