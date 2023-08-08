import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

const DropdownContainer = styled.div`
	flex: 1;
	position: relative;
	text-align: center;
	position: relative;
	text-align: center;
	width: 33%;
	padding: 20px 0;
`;

const DropdownButton = styled.div`
	cursor: pointer;
`;

const Menu = styled.div`
	background: #fff;
	position: absolute;
	left: 50%;
	top: 67px;
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


const HomeNavigationDetail = ({ menuName, openMenu, handleMenuClick }) => {
	const lists = useSelector((state) => state.menu);

	return (
		<DropdownContainer
			onMouseEnter={() => handleMenuClick(menuName)}
			onMouseLeave={() => handleMenuClick(null)}
		>
			<DropdownButton> {menuName} </DropdownButton>
			<Menu isDropped={openMenu === menuName}>
				<Ul>
					{lists[menuName].map((menuItem) => (
						<Li key={menuItem.id}>
							<LinkWrapper href={menuItem.link}>
								{menuItem.title}
							</LinkWrapper>
						</Li>
					))}
				</Ul>
			</Menu>
		</DropdownContainer>
	);
};

HomeNavigationDetail.propTypes = {
  menuName: PropTypes.string,
  openMenu: PropTypes.string,
  handleMenuClick: PropTypes.func,
};

export default HomeNavigationDetail;

