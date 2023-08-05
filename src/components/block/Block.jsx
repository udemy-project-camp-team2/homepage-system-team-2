import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBlock = styled.div(({ style }) => ({
	...style,
	width: '100%',
	dispaly: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const Block = ({ id, style }) => {
	return (
		<StyledBlock
			id={id}
			style={style}
			onClick={(e) => {
				e.stopPropagation();
			}}
		></StyledBlock>
	);
};

export default Block;

Block.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
};
