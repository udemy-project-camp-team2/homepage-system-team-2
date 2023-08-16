import styled from 'styled-components';
import Block from '../../block/Block';

interface TwoRowLayoutProps {
	container: {
		id: string;
		type: string;
		blocksIds: string[];
	};
}

const TwoRow = styled.div`
	width: 100%;
	min-height: inherit;
	display: flex;
	gap: 1rem;
`;

const TwoRowLayout = ({ container }: TwoRowLayoutProps) => {
	return (
		<TwoRow>
			{container.blocksIds.map((item) => (
				<Block
					key={item}
					id={item}
					style={{
						border: '1px dashed teal',
					}}
				/>
			))}
		</TwoRow>
	);
};

export default TwoRowLayout;
