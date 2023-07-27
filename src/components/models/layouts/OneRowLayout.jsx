import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from '../../block/Block';

const OneRow = styled.div`
	padding: ${(props) => props.$padding};
	height: 100%;
	min-height: inherit;
	display: grid;
	grid-template-areas: 'a';
	border: ${(props) => props.$border};
`;

const OneRowLayout = ({ onClick, container }) => {
	return (
		<OneRow
			onClick={onClick}
			$padding={container ? 0 : '1rem'}
			$border={container ? 'none' : '1px dashed #000'}
		>
			{container
				? container.blocksIds.map((item) => (
						<Block
							id={item}
							key={item}
							style={{ gridArea: 'a', border: '1px dashed teal' }}
						/>
				  ))
				: [1].map((item) => (
						<div
							key={item}
							style={{ gridArea: 'a', border: '1px dashed green' }}
						/>
				  ))}
		</OneRow>
	);
};

export default OneRowLayout;

OneRowLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};
