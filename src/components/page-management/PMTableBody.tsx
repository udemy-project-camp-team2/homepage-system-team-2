import { useSelector } from '../../store/hooks';
import PMTableRow from './PMTableRow';
import Modal from '../modal/Modal';
import PMForm from './PMForm';

interface PMTableBodyProps {
	pageLists: {
		key: string;
		id: string;
		title: string;
		link: string;
	}[];
	offset: number;
}

const PMTableBody = ({ pageLists, offset }: PMTableBodyProps) => {
	const isOpen = useSelector((state) => state.modal.isOpen);
	const targetList = useSelector((state) => state.modal.list);

	return (
		<tbody>
			{isOpen ? (
				<Modal>
					<PMForm targetList={targetList} />
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
