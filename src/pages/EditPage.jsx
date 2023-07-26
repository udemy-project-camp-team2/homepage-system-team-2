import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button';
import { addBlock } from '../store/slices/blockSlice';
import Block from '../components/common/Block';
import { useCallback, useState } from 'react';
import Modal from '../components/common/Modal';
import ContainerLayout from '../components/container/ContainerLayout';

const EditPage = () => {
	const dispatch = useDispatch();
	const blocks = useSelector((state) => state.blocks);
	const [showModal, setShowModal] = useState(false);

	const closeModal = useCallback(() => {
		setShowModal(false);
	}, []);

	return (
		<section>
			{showModal ? (
				<Modal onClose={closeModal}>
					<ContainerLayout />
				</Modal>
			) : null}
			<Button type={'button'} onClick={() => setShowModal(true)}>
				모달
			</Button>
			<Button type={'button'} onClick={() => dispatch(addBlock(0))}>
				블록 추가
			</Button>
			{blocks.map((block, index) => (
				<Block key={block.id} block={block} index={index} />
			))}
		</section>
	);
};

export default EditPage;
