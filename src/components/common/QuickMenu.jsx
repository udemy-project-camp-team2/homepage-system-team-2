import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
	removeContainer,
	updateLayoutType,
	updateOrderOfContainers,
} from '../../store/slices/containerSlice';
import Button from './Button';

const StyledQuickMenu = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

const QuickMenu = ({ containerId }) => {
	const dispatch = useDispatch();
	return (
		<StyledQuickMenu>
			<Button type="button">수정</Button>
			<Button
				type="button"
				onClick={() => dispatch(removeContainer(containerId))}
			>
				삭제
			</Button>
			<Button
				type="button"
				onClick={() =>
					dispatch(updateLayoutType({ id: containerId, type: '', length: 0 }))
				}
			>
				레이아웃 삭제
			</Button>
			<Button
				type="button"
				name="container_up"
				onClick={(e) =>
					dispatch(
						updateOrderOfContainers({ id: containerId, name: e.target.name })
					)
				}
			>
				위
			</Button>
			<Button
				type="button"
				name="container_down"
				onClick={(e) =>
					dispatch(
						updateOrderOfContainers({ id: containerId, name: e.target.name })
					)
				}
			>
				아래
			</Button>
		</StyledQuickMenu>
	);
};

export default QuickMenu;

QuickMenu.propTypes = {
	containerId: PropTypes.string,
};
