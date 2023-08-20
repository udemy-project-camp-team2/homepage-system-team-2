import { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../../store/hooks';
import { toggleModal } from '../../store/slices/modalSlice';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';
import Image from '../image/Image';
import Line from '../line/Line';
import List from '../list/List';

interface BlockProps {
	id: string;
	style?: any;
}

const StyledBlock = styled.div<{ style: any }>(({ style }) => ({
	...style,
	width: '100%',
	minHeight: 'inherit',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '1px solid teal',
}));

const Block = ({ id, style }: BlockProps) => {
	const design = useSelector((state) => state.design[id]);
	const dispatch = useDispatch();

	const designModalHandler = useCallback(() => {
		dispatch(
			toggleModal({
				name: 'design',
			})
		);
		dispatch(updateSelectedId(id));
	}, [id]);

	return (
		<StyledBlock
			id={id}
			style={style}
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			{design ? (
				design.designIds.map((designId) => {
					if (design.type.includes('image')) {
						return (
							<Image
								key={designId}
								designId={designId}
								borderType={design.type}
							/>
						);
					} else if (design.type.includes('line')) {
						return <Line key={designId} borderType={design.type} />;
					} else if (design.type.includes('list')) {
						return (
							<List
								key={designId}
								designId={designId}
								borderType={design.type}
							/>
						);
					}
				})
			) : (
				<b style={{ cursor: 'pointer' }} onClick={designModalHandler}>
					디자인을 선택해주세요!
				</b>
			)}
		</StyledBlock>
	);
};

export default Block;
