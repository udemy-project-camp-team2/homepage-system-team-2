import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Fragment, memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import MenuManagementItem from './MenuManagementItem';
import { deleteMenu, updateMenu } from '../../store/slices/menuSlice';

const ListInfoContainer = styled.div`
  margin: 1rem 0;
	color: ${(props) => props.theme.colors.gray.darker};
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem 1.3rem;
  border: 1px solid ${(props) => props.theme.colors.gray.lighter};
  border-radius: 4px;
  cursor: pointer;
  position: relative;

	/* 세로 선 */
  &::before {
    content: '';
    position: absolute;
    left: 55px;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: ${(props) => props.theme.colors.gray.lighter};
  }
`;

const ListTitle = styled.em`
  flex-grow: 1;
  font-weight: 700;
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

const EditMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const MenuTitleInput = styled.input`
  flex-grow: 1;
  padding: 1rem 1.3rem;
  border: 1px solid ${(props) => props.theme.colors.gray.lighter};
  border-radius: 4px;
`;

const MenuManagementList = ({ title, lists }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMenuEdit, setIsMenuEdit] = useState(false);
	const menuTitleRef = useRef('');
	const dispatch = useDispatch();

	return (
		<article>
			<ListInfoContainer>
				{isMenuEdit ? (
					<Fragment>
						<EditMenuContainer>
							<MenuTitleInput ref={menuTitleRef} type="text" />
								<ActionButton
									type="button"
									onClick={() =>
										dispatch(
											updateMenu({
												key: title,
												newKey: menuTitleRef.current.value,
											})
										)
									}
								>
									완료
								</ActionButton>
								<ActionButton type="button" onClick={() => setIsMenuEdit(false)}>
									취소
								</ActionButton>
						</EditMenuContainer>
					</Fragment>
				) : (
					<ListHeader>
						<ListTitle
							style={{ flexGrow: 1, fontWeight: 700 }}
							onClick={() => setIsOpen((prev) => !prev)}
						>
							<FontAwesomeIcon
								icon={isOpen ? faChevronDown : faChevronRight}
								style={{ marginRight: '2.5rem', width: '16px'}}
							/>
							{title}
						</ListTitle>

						<ActionButton type="button" onClick={() => setIsMenuEdit(true)}>
							<FontAwesomeIcon icon={faGear} size="2x" />
						</ActionButton>
						<ActionButton
							type="button"
							onClick={() => dispatch(deleteMenu({ key: title }))}
						>
							<FontAwesomeIcon icon={faTimes} size="2x"/>
						</ActionButton>
					</ListHeader>
				)}
			</ListInfoContainer>
			{isOpen ? (
				<ul style={{ marginLeft: '15px' }}>
					{lists.map((list) => (
						<MenuManagementItem
							key={list.title}
							list={list}
							targetKey={title}
						/>
					))}
				</ul>
			) : null}
		</article>
	);
};

export default memo(MenuManagementList);

MenuManagementList.propTypes = {
	title: PropTypes.string,
	lists: PropTypes.array,
};
