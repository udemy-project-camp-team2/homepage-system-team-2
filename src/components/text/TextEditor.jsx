import { useState } from 'react';

const TextEditor = () => {
	const [text, setText] = useState('');
	const [textStyle, setTextStyle] = useState('');
	return (
		<div>
			<ul style={{ padding: 0, display: 'flex', gap: '1rem' }}>
				<li onClick={() => setTextStyle('bold')}>Bold</li>
				<li onClick={() => setTextStyle('underline')}>Underline</li>
				<li onClick={() => setTextStyle('line-through')}>LineThrough</li>
			</ul>
			<textarea
				style={{ resize: 'none' }}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<span
				style={{ fontWeight: textStyle, textDecoration: textStyle }}
				contentEditable
				suppressContentEditableWarning
			>
				{text}
			</span>
		</div>
	);
};

export default TextEditor;
