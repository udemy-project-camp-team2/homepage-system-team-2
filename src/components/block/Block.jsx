import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleModal } from '../../store/slices/modalSlice';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';
import { useCallback } from 'react';
import Image from '../image/Image';
import Line from '../line/Line';
import List from '../list/List';

const StyledBlock = styled.div(({ style }) => ({
	...style,
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '2px dashed #000',
	padding: '25px',
	background: '#fff',
}));

const DesignSelectIcon = styled.b`
	cursor: pointer;
	padding-top: 48px;
	background: url(/images/icons/ico_design_select.png) center 0 no-repeat;
	font-weight: 400;
	font-size: 20px;
	color: #989898;
`;

const Block = ({ id, style }) => {
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
			onClick={(e) => {
				e.stopPropagation();
				console.log(id);
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
				<DesignSelectIcon
					style={{ cursor: 'pointer' }}
					onClick={designModalHandler}
				>
					디자인을 선택해주세요!
				</DesignSelectIcon>
			)}
		</StyledBlock>
	);
};

export default Block;

Block.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
};
