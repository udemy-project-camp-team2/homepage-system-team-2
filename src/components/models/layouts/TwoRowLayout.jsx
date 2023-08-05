import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';
import Block from '../../block/Block';

const TwoRow = styled.div`
	padding: ${(props) => props.$padding};
	width: 100%;
	height: 100%;
	display: flex;
	gap: 1rem;
	border: ${(props) => props.$border};
`;

const TwoRowLayout = ({ onClick, container }) => {
	return (
		<TwoRow
			onClick={onClick}
			$padding={container ? 0 : '1rem'}
			$border={container ? 'none' : '1px dashed #000'}
		>
			{container ? (
				container.blocksIds.map((item) => (
					<Block
						id={item}
						key={item}
						style={{
							border: '1px dashed teal',
						}}
					/>
				))
			) : (
				<Fragment>
					{[1, 2].map((item, index) => (
						<div
							key={item}
							style={{
								gridArea: index === 0 ? 'a' : 'b',
								border: '1px dashed green',
							}}
						/>
					))}
				</Fragment>
			)}
		</TwoRow>
	);
};

export default TwoRowLayout;

TwoRowLayout.propTypes = {
	onClick: PropTypes.func,
	container: PropTypes.object,
};