import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';
import Image from '../image/Image';

const StyledBlock = styled.div(({ style }) => ({
	...style,
	width: "100%",
	dispaly: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const Block = ({ id, style }) => {
	const dispatch = useDispatch();

	return (
		<Fragment>
			<StyledBlock
				id={id}
				style={style}
				onClick={(e) => {
					e.stopPropagation();
					dispatch(updateSelectedId(id));
				}}
			><Image list={{id, type: "four-row-image", circle: false}} /></StyledBlock>
		</Fragment>
	);
};

export default Block;

Block.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
};
