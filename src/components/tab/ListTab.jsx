import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { listLists } from '../../libs/list-lists';

const ListTabStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 10px 10px;
`;
const ListContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	cursor: pointer;
	img {
		max-width: 100%;
		height: 100%;
	}
`;

const ListTab = ({ setDesignType }) => {
	const selectedId = useSelector((state) => state.selectedId.selectedId);
	return (
		<Fragment>
			<ListTabStyled>
				{listLists.map((list) => (
					<ListContainer
						key={list.id}
						onClick={() =>
							setDesignType({
								id: selectedId,
								type: list.type,
								length: list.length,
							})
						}
					>
						<img src={list.src} alt={list.type} />
					</ListContainer>
				))}
			</ListTabStyled>
		</Fragment>
	);
};

export default ListTab;

ListTab.propTypes = {
	setDesignType: PropTypes.func,
};
