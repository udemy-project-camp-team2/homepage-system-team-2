import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateList, deleteList } from '../../store/slices/menuSlice';
import styled from 'styled-components'; 

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
  margin-left: .6rem;
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
	padding: .8rem 1.3rem;
	border: none;
	border-radius: 10px;
	background-color: #f3f3f3;
`;

const LinkInput = styled.input`
	flex-grow: 2;
	padding: .8rem 1.3rem;
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

const MenuManagementItem = ({ list, targetKey }) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const titleRef = useRef('');
	const linkRef = useRef('');
	const dispatch = useDispatch();

	const updateListHandler = () => {
		dispatch(
			updateList({
				key: targetKey,
				id: list.id,
				newTitle: titleRef.current.value || list.title,
				newLink: linkRef.current.value || list.link,
			})
		);
	};

	return (
		<>
			<ListItem>
				<ItemTitle>{list.title}</ItemTitle>
				<ActionButton type="button" onClick={() => setIsDetailOpen((prev) => !prev)}>
					<FontAwesomeIcon icon={faGear} size='2x'/>
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
					<FontAwesomeIcon icon={faTimes} size='2x'/>
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

MenuManagementItem.propTypes = {
	list: PropTypes.object,
	targetKey: PropTypes.string,
};
