import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from '../../block/Block';

const FourRow = styled.div`
	width: 100%;
	min-height: inherit;
	display: flex;
	gap: 1rem;
`;

const FourRowLayout = ({ onClick, container }) => {
	return (
		<FourRow onClick={onClick}>
			{container.blocksIds.map((item) => (
				<Block id={item} key={item} />
			))}
		</FourRow>
	);
};

export default FourRowLayout;

FourRowLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};
