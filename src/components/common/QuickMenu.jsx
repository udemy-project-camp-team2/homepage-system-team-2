import Button from './Button';

// eslint-disable-next-line react/prop-types
const QuickMenu = ({ onMoveUp, onMoveDown, onDelete }) => {

  return (
    <div style={{ display: 'inline-block' }}>
      <Button type={'button'}>수정</Button>
      <Button type={'button'} onClick={onDelete}>삭제</Button>
      <Button type={'button'} onClick={onMoveUp}>&larr;</Button>
      <Button type={'button'} onClick={onMoveDown}>&rarr;</Button>
		
    </div>
  );
};

export default QuickMenu;
