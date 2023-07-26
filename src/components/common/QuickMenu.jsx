import Button from './Button';

const QuickMenu = () => {
	return (
		<div style={{ display: 'inline-block' }}>
			<Button type={'button'}>수정</Button>
			<Button type={'button'}>삭제</Button>
			<Button type={'button'}>&larr;</Button>
			<Button type={'button'}>&rarr;</Button>
		</div>
	);
};

export default QuickMenu;
