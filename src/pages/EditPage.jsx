import { useCallback } from 'react';
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

	return (
		<section style={{ paddingTop: '27px', borderBottom: '2px dashed #000' }}>
			{isModalShown ? (
				<Modal onClose={closeModal}>
					{modalName === 'layout' ? (
						<LayoutTab onClose={closeModal} />
					) : modalName === 'design' ? (
						<DesignTab onClose={closeModal} />
					) : null}
				</Modal>
			) : null}
			<Button
				type={'button'}
				onClick={() => dispatch(addContainer(0))}
				style={{
					position: 'absolute',
					left: '50%',
					top: '0',
					transform: 'translateX(-50%)',
					zIndex: 2,
					background: '#565656',
					borderRadius: '42px',
					width: '206px',
					lineHeight: '54px',
					textAlign: 'center',
					fontSize: '18px',
					fontWeight: '300',
					color: '#fff',
					padding: '0',
					height: '54px',
					cursor: 'pointer',
				}}
			>
				+ 여기에 블록 추가
			</Button>
			{containers.map((container, index) => (
				<Container key={container.id} container={container} index={index} />
			))}
		</section>
	);
};

export default EditPage;
