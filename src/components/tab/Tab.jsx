import styled from 'styled-components';
import { tabLists } from '../../libs/tab-lists';
import { useState } from 'react';

const TabWrapper = styled.div`
  display: flex;
  ul {
    &:nth-of-type(1) {
      padding: 0
    };
    &:nth-of-type(2) {
      flex-grow: 1
    }
  }
`;

const TabLabel = styled.li`
  background-color: ${props => props.$bgColor};
  cursor: pointer;
`;

const TabContents = styled.li`
  height: 80vh;
  display: ${props => props.$display};
  grid-template-columns: ${props => props.$gridTemplateColumns};
  gap: 1rem;
  overflow-y: auto;
`;

const Tab = () => {
  const [current, setCurrent] = useState(0);

  const clickTabHandler = (e, index) => {
    e.stopPropagation();
    if(index === current) return;
    setCurrent(index);
  }

  return (
    <TabWrapper>
      <ul>{tabLists.map((tab, index) => <TabLabel key={index} $bgColor={index === current ? "teal" : ""} onClick={(e) => clickTabHandler(e, index)}>{tab.label}</TabLabel>)}</ul>
      <ul>{tabLists.map((tab, index) => <TabContents key={index} $display={index === current ? "grid" : "none"} $gridTemplateColumns={index === current ? "repeat(2, 1fr)" : ""}>{tab.element}</TabContents>)}</ul>
    </TabWrapper>
  );
};

export default Tab;