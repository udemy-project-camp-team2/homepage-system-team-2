import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PMTableRow from './PMTableRow';
import Modal from '../modal/Modal';

const PMTableBody = ({ pageLists, offset }) => {
	const isOpen = useSelector((state) => state.modal.isOpen);
	const title = useSelector((state) => state.modal.title);
	const name = useSelector((state) => state.modal.name);

	return (
		<tbody>
			{isOpen ? <Modal>{name === '상세' ? title : '복제'}</Modal> : null}
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
