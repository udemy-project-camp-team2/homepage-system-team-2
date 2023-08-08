import React, { lazy, Suspense, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContainer } from '../store/slices/containerSlice';
import Container from '../components/container/Container';
import Button from '../components/common/Button';
import Block from '../components/common/Block';
import Skeleton from '../components/skeleton/skeleton';
import { addBlock, layoutsConfig } from '../store/slices/blockSlice';

const Modal = lazy(() => import('../components/common/Modal'));
const ContainerLayout = lazy(() =>
	import('../components/container/ContainerLayout')
);

const EditPage = () => {
	const dispatch = useDispatch();
	const blocks = useSelector((state) => state.blocks.blocks) || [];
	const [showModal, setShowModal] = useState(false);

	const closeModal = useCallback(() => {
		setShowModal(false);
	}, []);

	return (
		<section>
			{showModal ? (
				<Suspense fallback={<Skeleton />}>
					<Modal onClose={closeModal}>
						{layoutsConfig.map((layout) => (
							<ContainerLayout key={layout.type} type={layout.type} />
						))}
					</Modal>
				</Suspense>
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
