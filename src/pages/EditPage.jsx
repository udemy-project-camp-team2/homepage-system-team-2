import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContainer } from '../store/slices/containerSlice';
import { updateSelectedId } from '../store/slices/selectedIdSlice';
import Container from '../components/container/Container';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import LayoutTab from '../components/tab/LayoutTab';
import { toggleModal } from '../store/slices/modalSlice';

const EditPage = () => {
	const dispatch = useDispatch();
	const containers = useSelector((state) => state.containers);
	const isModalShown = useSelector((state) => state.modal.isShown);
	const selectedName = useSelector((state) => state.selectedId.name);

	const closeModal = useCallback(() => {
		dispatch(toggleModal());
		dispatch(
			updateSelectedId({
				id: '',
				name: '',
			})
		);
	}, []);

	return (
		<section>
			{isModalShown ? (
				<Modal onClose={closeModal}>
					{selectedName === 'container' ? <LayoutTab /> : null}
				</Modal>
			) : null}
			<Button type={'button'} onClick={() => dispatch(toggleModal())}>
				모달
			</Button>
			<Button
				type={'button'}
				onClick={() => dispatch(addContainer(0))}
				style={{
					position: 'absolute',
					left: '50%',
					top: '.7rem',
					transform: 'translateX(-50%)',
					zIndex: 2,
				}}
			>
				컨테이너 추가
			</Button>
			{containers.map((container, index) => (
				<Container key={container.id} container={container} index={index} />
			))}
		</section>
	);
};

export default EditPage;
