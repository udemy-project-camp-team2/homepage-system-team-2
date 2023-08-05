import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContainer } from '../store/slices/containerSlice';
import { updateSelectedId } from '../store/slices/selectedIdSlice';
import Container from '../components/container/Container';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { toggleModal } from '../store/slices/modalSlice';
import ContainerLayout from '../components/container/ContainerLayout';
import { layoutsConfig } from '../store/slices/blockSlice';

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
					{layoutsConfig.map((layout) => (
						<ContainerLayout key={layout.type} type={layout.type} />
					))}
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
