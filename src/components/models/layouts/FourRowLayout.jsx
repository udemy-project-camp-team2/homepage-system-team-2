import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';
import Block from '../../block/Block';
import Image from '../../image/Image';

const FourRow = styled.div`
	padding: ${(props) => props.$padding};
	height: 100%;
	display: grid;
	grid-template-areas: 'a b c d';
	gap: 1rem;
	border: ${(props) => props.$border};
`;

const FourRowLayout = ({ onClick, container }) => {
	return (
		<FourRow
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
								border: '1px dashed green',
							}}
						/>
					))}
				</Fragment>
			)}
		</FourRow>
	);
};

export default FourRowLayout;

FourRowLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};
