import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button';
import { addContainer } from '../store/slices/containerSlice';
import Container from '../components/common/Container';
import { useCallback, useState } from 'react';
import Modal from '../components/common/Modal';
import ContainerLayout from '../components/container/ContainerLayout';

const EditPage = () => {
	const dispatch = useDispatch();
	const containers = useSelector((state) => state.containers);
	const [showModal, setShowModal] = useState(false);

	const closeModal = useCallback(() => {
		setShowModal(false);
	}, []);

	return (
		<section>
			{showModal ? (
				<Modal onClose={closeModal}>
					<div>
						<ContainerLayout />
					</div>
				</Modal>
			) : null}
			<Button type={'button'} onClick={() => setShowModal(true)}>
				모달
			</Button>
			<Button type={'button'} onClick={() => dispatch(addContainer(0))}>
				블록 추가
			</Button>
			{containers.map((container, index) => (
				<Container key={container.id} container={container} index={index} />
			))}
		</section>
	);
};

export default EditPage;
