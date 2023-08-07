import { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';
import styled, { css } from 'styled-components';
import { menuLists } from '../libs/menu-lists';

const Header = styled.header`
	width: 1170px;
	margin: 0 auto;
`;

const Home = () => {

	const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


	return (
		<Fragment>
			<Header>
				<Logo />
			</Header>
			<Link to="/admin">Admin</Link>
			
			<Wrapper>
      {Object.keys(menuLists).map((menuName) => (
        <DropdownContainer key={menuName} 
						onMouseEnter={() => handleMenuClick(menuName)}
						onMouseLeave={() => handleMenuClick(null)}>
          <DropdownButton> {menuName} </DropdownButton>
          <Menu isDropped={openMenu === menuName}>
            <Ul>
              {menuLists[menuName].map((menuItem) => (
                <Li key={menuItem.id}>
                  <LinkWrapper href={menuItem.link}>{menuItem.title}</LinkWrapper>
                </Li>
              ))}
            </Ul>
          </Menu>
        </DropdownContainer>
      ))}
    </Wrapper>


		</Fragment>
	);
};

export default Home;

const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background: ${(props) => props.theme.colors.orange};
  height: 50px;
  font-weight: bold;
`;

const DropdownContainer = styled.div`
	flex: 1;
  position: relative;
  text-align: center;
	width: 33%;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: #fff;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100%;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #000;
`;
