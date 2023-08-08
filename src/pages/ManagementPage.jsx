import { styled } from 'styled-components';
import MenuManagement from '../components/menu/MenuManagement';
import PageManagement from '../components/page-management/PageManagement';
import { useTab } from '../hooks/useTab';
import { useTitle } from '../hooks/useTitle';

const ManagementLayout = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ManagementWrapper = styled.article`
	width: max-content;
	background-color: ${(props) => props.theme.colors.gray.lighter};
`;

const TabButtons = styled.button`
	padding: 0.5rem 0;
	width: 15rem;
	display: inline-block;
	color: ${(props) =>
		props.$fontColor ? '#fff' : props.theme.colors.gray.darker};
	background-color: ${(props) =>
		props.$bgColor ? props.theme.colors.orange : 'transparent'};
	font-size: 1.3rem;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
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
		content: MenuManagement,
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
		<ManagementLayout>
			<ManagementWrapper>
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
			</ManagementWrapper>
		</ManagementLayout>
	);
};

export default ManagementPage;
