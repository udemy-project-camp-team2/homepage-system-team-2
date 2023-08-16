import styled from 'styled-components';
import Block from '../../block/Block';

interface OneRowLayoutProps {
	container: {
		id: string;
		type: string;
		blocksIds: string[];
	};
}

const OneRow = styled.div`
	width: 100%;
	min-height: inherit;
	display: flex;
	gap: 1rem;
`;

const OneRowLayout = ({ container }: OneRowLayoutProps) => {
	return (
		<OneRow>
			{container.blocksIds.map((item) => (
				<Block id={item} key={item} />
			))}
		</OneRow>
	);
};

export default OneRowLayout;
