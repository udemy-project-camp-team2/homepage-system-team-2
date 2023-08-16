import { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from '../../store/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import { updateList, deleteList } from '../../store/slices/menuSlice';

interface MenuManagementItemType {
	list: {
		id: string;
		title: string;
		link: string;
	};
	targetKey: string;
}

const ListItem = styled.li`
	background-color: #fff;
	border: 1px solid ${(props) => props.theme.colors.gray.lighter};
	border-radius: 4px;
	padding: 1rem 1.3rem;
	margin-bottom: 0.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ItemTitle = styled.span`
	flex-grow: 1;
`;

const ActionButton = styled.button`
	margin-left: 0.6rem;
	background-color: transparent;
	color: ${(props) => props.theme.colors.gray.darker};
	border: none;
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.orange};
	}
`;

const DetailWrapper = styled.div`
	margin-top: -10px;
	background-color: #fff;
	border: 1px solid ${(props) => props.theme.colors.gray.lighter};
	border-radius: 0 0 4px 4px;
	padding: 1rem 1.3rem;
	margin-bottom: 0.5rem;
`;

const DetailItem = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	p {
		padding-right: 1.3rem;
	}
`;

const TitleInput = styled.input`
	flex-grow: 2;
	padding: 0.8rem 1.3rem;
	border: none;
	border-radius: 10px;
	background-color: #f3f3f3;
`;

const LinkInput = styled.input`
	flex-grow: 2;
	padding: 0.8rem 1.3rem;
	margin-right: 1.5rem;
	border: none;
	border-radius: 10px;
	background-color: #f3f3f3;
`;

const CompleteButton = styled.button`
	padding: 0.5rem 1rem;
	border: 1px solid ${(props) => props.theme.colors.orange};
	border-radius: 4px 0 0 4px;
	background-color: transparent;
	cursor: pointer;

	&:hover {
		color: #fff;
		background-color: ${(props) => props.theme.colors.orange};
	}
`;

const CancelButton = styled.button`
	padding: 0.5rem 1rem;
	border: transparent;
	border-radius: 0 4px 4px 0;
	background-color: #f3f3f3;
	cursor: pointer;

	&:hover {
		color: #fff;
		background-color: ${(props) => props.theme.colors.orange};
	}
`;

const MenuManagementItem = ({ list, targetKey }: MenuManagementItemType) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const titleRef = useRef<HTMLInputElement | null>(null);
	const linkRef = useRef<HTMLInputElement | null>(null);
	const dispatch = useDispatch();

	const updateListHandler = () => {
		dispatch(
			updateList({
				key: targetKey,
				id: list.id,
				newTitle: (titleRef.current as HTMLInputElement).value || list.title,
				newLink: (linkRef.current as HTMLInputElement).value || list.link,
			})
		);

		setIsDetailOpen(false);
		(titleRef.current as HTMLInputElement).value = '';
		(linkRef.current as HTMLInputElement).value = '';
	};

	return (
		<>
			<ListItem>
				<ItemTitle>{list.title}</ItemTitle>
				<ActionButton
					type="button"
					onClick={() => setIsDetailOpen((prev) => !prev)}
				>
					<FontAwesomeIcon icon={faGear} size="2x" />
				</ActionButton>
				<ActionButton
					type="button"
					onClick={() =>
						dispatch(
							deleteList({
								key: targetKey,
								id: list.id,
							})
						)
					}
				>
					<FontAwesomeIcon icon={faTimes} size="2x" />
				</ActionButton>
			</ListItem>
			{isDetailOpen ? (
				<DetailWrapper>
					<DetailItem>
						<p>제목</p>
						<TitleInput
							ref={titleRef}
							type="text"
							style={{ display: 'block' }}
							placeholder={list.title}
						/>
					</DetailItem>
					<DetailItem>
						<p>링크</p>
						<LinkInput
							ref={linkRef}
							type="text"
							style={{ display: 'block' }}
							placeholder={list.link}
						/>
						<CompleteButton type="button" onClick={updateListHandler}>
							완료
						</CompleteButton>
						<CancelButton type="button" onClick={() => setIsDetailOpen(false)}>
							취소
						</CancelButton>
					</DetailItem>
				</DetailWrapper>
			) : null}
		</>
	);
};

export default memo(MenuManagementItem);
