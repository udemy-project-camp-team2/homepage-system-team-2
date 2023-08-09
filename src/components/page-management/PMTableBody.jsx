import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PMTableRow from './PMTableRow';
import Modal from '../modal/Modal';
import PMForm from './PMForm';

const PMTableBody = ({ pageLists, offset }) => {
	const isOpen = useSelector((state) => state.modal.isOpen);
	const targetList = useSelector((state) => state.modal.list);
	const name = useSelector((state) => state.modal.name);

	return (
		<tbody>
			{isOpen ? (
				<Modal>
					<PMForm name={name} targetList={targetList} />
				</Modal>
			) : null}
			{pageLists.length > 0 &&
				pageLists
					.slice(offset, offset + 10)
					.map((list) => <PMTableRow key={list.title} list={list} />)}
		</tbody>
	);
};

export default PMTableBody;

PMTableBody.propTypes = {
	offset: PropTypes.number,
	pageLists: PropTypes.array,
};
