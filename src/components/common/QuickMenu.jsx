import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
	removeContainer,
	updateLayoutType,
	updateOrderOfContainers,
} from '../../store/slices/containerSlice';
import StyledButton from './EditButton';

const StyledQuickMenu = styled.div`
	position: absolute;
	top: 30px;
	right: 0px;
	background: #565656;
	border-radius: 42px;
	height: 54px;
	width: 236px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

const QuickMenu = ({ containerId }) => {
	const dispatch = useDispatch();
	return (
		<StyledQuickMenu>
			<StyledButton
				type="button"
				style={{
					background: 'url(/images/icons/ico_edit.png) 0 0 no-repeat',
				}}
			>
				수정
			</StyledButton>
			<StyledButton
				type="button"
				onClick={() =>
					dispatch(updateLayoutType({ id: containerId, type: '', length: 0 }))
				}
				style={{
					background: 'url(/images/icons/ico_ellips.png) 0 0 no-repeat',
				}}
			>
				레이아웃 삭제
			</StyledButton>
			<StyledButton
				type="button"
				name="container_up"
				onClick={(e) =>
					dispatch(
						updateOrderOfContainers({ id: containerId, name: e.target.name })
					)
				}
				style={{
					background: 'url(/images/icons/ico_arrow_up.png) 0 0 no-repeat',
				}}
			>
				위
			</StyledButton>
			<StyledButton
				type="button"
				name="container_down"
				onClick={(e) =>
					dispatch(
						updateOrderOfContainers({ id: containerId, name: e.target.name })
					)
				}
				style={{
					background: 'url(/images/icons/ico_arrow_down.png) 0 0 no-repeat',
				}}
			>
				아래
			</StyledButton>
			<StyledButton
				type="button"
				onClick={() => dispatch(removeContainer(containerId))}
				style={{
					background: 'url(/images/icons/ico_delete.png) 0 0 no-repeat',
				}}
			>
				삭제
			</StyledButton>
		</StyledQuickMenu>
	);
};

export default QuickMenu;

QuickMenu.propTypes = {
	containerId: PropTypes.string,
};
