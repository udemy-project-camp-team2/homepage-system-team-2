import styled from 'styled-components';
import Block from '../../block/Block';

interface FourRowLayoutProps {
	container: {
		id: string;
		type: string;
		blocksIds: string[];
	};
}

const FourRow = styled.div`
	width: 100%;
	min-height: inherit;
	display: flex;
	gap: 1rem;
`;

const FourRowLayout = ({ container }: FourRowLayoutProps) => {
	return (
		<FourRow>
			{container.blocksIds.map((item) => (
				<Block id={item} key={item} />
			))}
		</FourRow>
	);
};

export default FourRowLayout;
