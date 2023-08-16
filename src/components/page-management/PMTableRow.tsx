import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDispatch } from '../../store/hooks';
import { toggleModal } from '../../store/slices/modalSlice';

interface PMTableRowProps {
	list: {
		key: string;
		title: string;
		link: string;
	};
}

const Td = styled.td`
	padding: 1rem 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray.darker};
	text-align: center;
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
	margin-right: 0.5rem;
	font-weight: bold;
	color: ${(props) => props.theme.colors.gray.lighter};
	cursor: pointer;
`;

const DesignButton = styled.button`
	background-color: ${(props) => props.theme.colors.orange};
	border: 1px solid ${(props) => props.theme.colors.orange};
	border-radius: 50px;
	padding: 0.3rem 0.8rem;
	font-weight: bold;
	color: #fff;
	cursor: pointer;
`;

const PMTableRow = ({ list }: PMTableRowProps) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	return (
		<tr>
			<Td>
				<CheckboxInput type="checkbox" name="checkbox" />
			</Td>
			<Td>{list.title}</Td>
			<Td>{list.link}</Td>
			<Td>{list.key}</Td>
			<Td>{new Date().toLocaleString()}</Td>
			<Td>
				<ManagementButton
					type="button"
					onClick={() =>
						dispatch(
							toggleModal({
								name: '복제',
								list,
							})
						)
					}
				>
					복제
				</ManagementButton>
				<DesignButton
					type="button"
					onClick={() => navigate(`/admin/edit${list.link}`)}
				>
					디자인
				</DesignButton>
			</Td>
		</tr>
	);
};

export default memo(PMTableRow);
