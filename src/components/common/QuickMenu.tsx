import { memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from '../../store/hooks';
import {
	removeContainer,
	updateLayoutType,
	updateOrderOfContainers,
} from '../../store/slices/containerSlice';
import Button from './Button';

interface QuickMenuProps {
	containerId: string;
}

const StyledQuickMenu = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

const QuickMenu = ({ containerId }: QuickMenuProps) => {
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
				onClick={(e: any) =>
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
				onClick={(e: any) =>
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

export default memo(QuickMenu);
