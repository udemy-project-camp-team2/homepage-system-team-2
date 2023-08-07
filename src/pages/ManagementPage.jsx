import { Fragment } from 'react';
import { styled } from 'styled-components';
import MenuDetail from '../components/menu-management/MenuDetail';
import PageManagement from '../components/page-management/PageManagement';
import { useTab } from '../hooks/useTab';
import { useTitle } from '../hooks/useTitle';
// import MenuManagement from '../components/menu/MenuManagement';

const TabButtons = styled.button`
	display: inline-block;
	color: ${(props) =>
		props.$fontColor ? '#fff' : props.theme.colors.gray.darker};
	background-color: ${(props) =>
		props.$bgColor ? props.theme.colors.orange : 'transparent'};
	border: none;
	outline: none;
	cursor: pointer;

	&:nth-of-type(1) {
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}

	&:nth-of-type(2) {
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
`;

const contents = [
	{
		label: '메뉴 관리',
		content: MenuDetail,
	},
	{
		label: '페이지 관리',
		content: PageManagement,
	},
];

const ManagementPage = () => {
	const { idx, targetContent, targetAction } = useTab(0, contents);
	useTitle(targetContent.label);

	return (
		<Fragment>
			{contents.map((content, index) => (
				<TabButtons
					key={content.label}
					type="button"
					$fontColor={index === idx}
					$bgColor={index === idx}
					onClick={() => targetAction(index)}
				>
					{content.label}
				</TabButtons>
			))}
			<targetContent.content />
		</Fragment>
	);
};

export default ManagementPage;
