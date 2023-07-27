import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';
import Block from '../../block/Block';

const FourMix = styled.div`
	padding: ${(props) => props.$padding};
	height: 100%;
	min-height: inherit;
	display: grid;
	grid-template-areas:
		'a a'
		'b c'
		'd d ';
	gap: 1rem;
	border: ${(props) => props.$border};
`;

const FourMixLayout = ({ onClick, container }) => {
	return (
		<FourMix
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
							gridArea:
								index === 0 ? 'a' : index === 1 ? 'b' : index === 2 ? 'c' : 'd',
							border: '1px dashed teal',
							textAlign: 'center',
						}}
					/>
				))
			) : (
				<Fragment>
					{[1, 2, 3, 4].map((item, index) => (
						<div
							key={item}
							style={{
								gridArea:
									index === 0
										? 'a'
										: index === 1
										? 'b'
										: index === 2
										? 'c'
										: 'd',
								border: '1px dashed teal',
								textAlign: 'center',
							}}
						/>
					))}
				</Fragment>
			)}
		</FourMix>
	);
};

export default FourMixLayout;

FourMixLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};
