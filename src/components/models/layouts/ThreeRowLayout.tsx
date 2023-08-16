import styled from 'styled-components';
import Block from '../../block/Block';

interface ThreeRowLayoutProps {
	container: {
		id: string;
		type: string;
		blocksIds: string[];
	};
}

const ThreeRow = styled.div`
	width: 100%;
	min-height: inherit;
	display: flex;
	gap: 1rem;
`;

const ThreeRowLayout = ({ container }: ThreeRowLayoutProps) => {
	return (
		<ThreeRow>
			{container.blocksIds.map((item) => (
				<Block id={item} key={item} />
			))}
		</ThreeRow>
	);
};

export default ThreeRowLayout;
