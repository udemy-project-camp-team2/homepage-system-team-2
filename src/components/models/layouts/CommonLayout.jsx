import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Block from '../../block/Block';
import { useCallback } from 'react';

const StyledCommonLayout = styled.div`
	padding: ${(props) => props.$padding};
	height: 100%;
	min-height: inherit;
	display: grid;
	grid-template-areas: ${(props) => props.$gridTemplateAreas};
	border: ${(props) => props.$border};
`;

const CommonLayout = ({ onClick, listData, container }) => {
	const templates = useMemo(() => {
		switch (listData.type) {
			case 'one_row_layout':
				return 'a';
			case 'two_row_layout':
				return 'a b';
			case 'four_row_layout':
				return 'a b c d';
			case 'three_mix_layout':
				return `'a b' 'a c'`;
			case 'four_mix_layout':
				return `'a a' 'b c' 'd d'`;
			default:
				return;
		}
	}, []);

	return (
		<StyledCommonLayout
			onClick={onClick}
			$padding={container ? 0 : '1rem'}
			$border={container ? 'none' : '1px dashed #000'}
			$gridTemplateAreas={templates}
		>
			{container
				? container.blocksIds.map((item, index) => (
						<Block
							id={item}
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
								border: '1px dashed orange',
							}}
						/>
				  ))
				: Array.from({ length: listData.length }, () => uuidv4()).map(
						(item, index) => (
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
									border: '1px dashed orange',
								}}
							/>
						)
				  )}
		</StyledCommonLayout>
	);
};

export default CommonLayout;

CommonLayout.propTypes = {
	onClick: PropTypes.func,
	listData: PropTypes.object,
	container: PropTypes.object,
};
