import React, { useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const MenuTitle = ({ menu, onSave,  }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(menu);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    console.log("New Title:", newTitle); // newTitle의 값을 확인하기 위해 추가
    onSave(newTitle);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setNewTitle(menu);
    setEditing(false);
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };
  

  return (
    <TitleContainer>
      {editing ? (
        <>
          <InputTitle value={newTitle} onChange={handleChange} />
          <EditButton onClick={handleSaveClick}>저장</EditButton>
          <CancelButton onClick={handleCancelClick}>취소</CancelButton>
        </>
      ) : (
        <>
          <Title>{newTitle}</Title>
          <EditButton onClick={handleEditClick}>수정</EditButton>
        </>
      )}
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const InputTitle = styled.input`
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
`;

const EditButton = styled.button`
  margin-left: 5px;
`;

const CancelButton = styled.button`
  margin-left: 5px;
`;

export default MenuTitle;
