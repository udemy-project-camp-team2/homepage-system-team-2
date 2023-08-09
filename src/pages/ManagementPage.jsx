import { styled } from 'styled-components';
import MenuManagement from '../components/menu/MenuManagement';
import PageManagement from '../components/page-management/PageManagement';
import { useTab } from '../hooks/useTab';
import { useTitle } from '../hooks/useTitle';

const ManagementLayout = styled.div`
	display: flex;
  width: 100%;
  justify-content: center;
`;

const ManagementWrapper = styled.article`
	width: 1220px;
`;

const TabButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
  align-items: center;
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.gray.lighter};
	border-radius: 10px;
	margin-bottom: 30px;
`;

const TabButton = styled.button`
	padding: 1rem 0;
	flex: 1;
	color: ${(props) =>
		props.$fontColor ? '#fff' : props.theme.colors.gray.darker};
	background-color: ${(props) =>
		props.$bgColor ? props.theme.colors.orange : 'transparent'};
	font-size: 1.3rem;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: ${(props) =>
		props.$isFirst ? '10px 0 0 10px' : props.$isLast ? '0 10px 10px 0' : '0'};
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
				<TabButtonsWrapper>
					{contents.map((content, index) => (
						<TabButton
							key={content.label}
							type="button"
							$fontColor={index === idx}
							$bgColor={index === idx}
							$isFirst={index === 0}
							$isLast={index === contents.length - 1}
							onClick={() => targetAction(index)}
						>
							{content.label}
						</TabButton>
					))}
				</TabButtonsWrapper>
				<targetContent.content />
			</ManagementWrapper>
		</ManagementLayout>
	);
};

export default ManagementPage;
