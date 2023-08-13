import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from '../../block/Block';

const OneRow = styled.div`
	width: 100%;
	min-height: inherit;
	display: flex;
	gap: 1rem;
`;

const OneRowLayout = ({ onClick, container }) => {
	return (
		<OneRow onClick={onClick}>
			{container.blocksIds.map((item) => (
				<Block id={item} key={item} />
			))}
		</OneRow>
	);
};

export default OneRowLayout;

OneRowLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};
