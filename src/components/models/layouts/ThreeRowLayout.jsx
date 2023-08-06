import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from '../../block/Block';

const ThreeRow = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 1rem;
`;

const ThreeRowLayout = ({ onClick, container }) => {
	return (
		<ThreeRow onClick={onClick}>
			{container.blocksIds.map((item) => (
				<Block id={item} key={item} />
			))}
		</ThreeRow>
	);
};

export default ThreeRowLayout;

ThreeRowLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};
