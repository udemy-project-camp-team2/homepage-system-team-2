import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addContainer } from '../store/slices/containerSlice';
import Container from '../components/container/Container';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { toggleModal } from '../store/slices/modalSlice';
import { useTitle } from '../hooks/useTitle';
import LayoutTab from '../components/tab/LayoutTab';
import DesignTab from '../components/tab/DesignTab';

const EditPage = () => {
	useTitle('편집페이지');
	const { id } = useParams();
	const dispatch = useDispatch();
	const containers = useSelector((state) => state.containers);
	const isModalShown = useSelector((state) => state.modal.isOpen);
	const modalName = useSelector((state) => state.modal.name);

	const closeModal = useCallback(() => {
		dispatch(
			toggleModal({
				name: '',
			})
		);
	}, []);

	useEffect(() => {
		localStorage.setItem(id, JSON.stringify(containers));
	}, [containers]);

	return (
		<section>
			{isModalShown ? (
				<Modal onClose={closeModal}>
					{modalName === 'layout' ? (
						<LayoutTab />
					) : modalName === 'design' ? (
						<DesignTab />
					) : null}
				</Modal>
			) : null}
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
