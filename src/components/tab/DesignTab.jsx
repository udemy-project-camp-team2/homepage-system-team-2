import { useState } from 'react';
import styled from 'styled-components';
import ImageTab from './ImageTab';
import LineTab from './LineTab';
import Button from '../common/Button';

const designLists = [
	{ id: 0, label: '구분선', element: <LineTab /> },
	{ id: 1, label: '이미지', element: <ImageTab /> },
	{ id: 2, label: '텍스트', element: null },
];

const TabWrapper = styled.div`
	display: flex;
`;

const TabTitleList = styled.ul`
	padding: 0;
	position: relative;
`;

const TabTitleItem = styled.li`
	width: max-content;
	color: ${(props) => props.$color};
	font-weight: ${(props) => props.$fontWeight};
	cursor: pointer;
`;

const TabContentList = styled.ul`
	width: 100%;
`;

const TabContentItem = styled.li`
	display: ${(props) => props.$display};
`;

const DesignTab = () => {
	const [currentTab, setCurrentTab] = useState(0);
	return (
		<TabWrapper>
			<TabTitleList>
				{designLists.map((list, index) => (
					<TabTitleItem
						key={list.id}
						$color={currentTab === index ? 'teal' : '#000'}
						$fontWeight={currentTab === index ? 700 : 'normal'}
						onClick={() => setCurrentTab(index)}
					>
						{list.label}
					</TabTitleItem>
				))}
				<Button
					type={'button'}
					style={{ width: '100%', position: 'absolute', bottom: 0 }}
				>
					저장
				</Button>
			</TabTitleList>
			<TabContentList>
				{designLists.map((list, index) => (
					<TabContentItem
						key={list.id}
						$display={currentTab === index ? 'block' : 'none'}
					>
						{list.element}
					</TabContentItem>
				))}
			</TabContentList>
		</TabWrapper>
	);
};

export default DesignTab;
