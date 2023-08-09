import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from '../../block/Block';

const OneRow = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 1rem;
	align-items: center;
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
