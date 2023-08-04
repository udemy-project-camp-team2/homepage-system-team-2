import PropTypes from 'prop-types';
import PMTableRow from './PMTableRow';

const PMTableBody = ({ pageLists, offset }) => {
	return (
		<tbody>
			{pageLists.length > 0 ? (
				pageLists
					.slice(offset, offset + 10)
					.map((list) => <PMTableRow key={list.title} list={list} />)
			) : (
				<tr>
					<td>no data</td>
				</tr>
			)}
		</tbody>
	);
};

export default PMTableBody;

PMTableBody.propTypes = {
	offset: PropTypes.number,
	pageLists: PropTypes.array,
};
