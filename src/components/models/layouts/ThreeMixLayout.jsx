import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';
import Block from '../../block/Block';

const ThreeMix = styled.div`
	padding: ${(props) => props.$padding};
	height: 100%;
	min-height: inherit;
	display: grid;
	grid-template-areas:
		'a b'
		'a c';
	gap: 1rem;
	border: ${(props) => props.$border};
`;

const ThreeMixLayout = ({ onClick, container }) => {
	return (
		<ThreeMix
			onClick={onClick}
			$padding={container ? 0 : '1rem'}
			$border={container ? 'none' : '1px dashed #000'}
		>
			{container ? (
				container.blocksIds.map((item, index) => (
					<Block
						id={item}
						key={item}
						style={{
							gridArea: index === 0 ? 'a' : index === 1 ? 'b' : 'c',
							border: '1px dashed teal',
							textAlign: 'center',
						}}
					/>
				))
			) : (
				<Fragment>
					{[1, 2, 3].map((item, index) => (
						<div
							key={item}
							style={{
								gridArea: index === 0 ? 'a' : index === 1 ? 'b' : 'c',
								border: '1px dashed teal',
								textAlign: 'center',
							}}
						/>
					))}
				</Fragment>
			)}
		</ThreeMix>
	);
};

export default ThreeMixLayout;

ThreeMixLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};
