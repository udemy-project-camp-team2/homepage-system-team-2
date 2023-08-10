import PropTypes from 'prop-types';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ListContainer = styled.div(({ $styles }) => ({
	margin: '0 auto',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	placeself: 'center',
	backgroundColor: '#fff',
	...$styles,
}));

const ListArticle = styled.div`
	padding: 25px;
	border: 1px dashed #000000;
	box-sizing: border-box;
	background: #fff;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ImgSection = styled.div(({ $styles }) => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	...$styles,
}));

const Image = styled.img(({ $styles }) => ({
	width: '100%',
	height: '100%',
	display: 'block',
	...$styles,
}));

const TitleSetion = styled.div`
	margin-top: 15px;
	text-align: center;
`;

const TitleStyled = styled.p(({ $styles }) => ({
	margin: '0',
	...$styles,
}));

const TextStyled = styled.p(({ $styles }) => ({
	margin: '0',
	color: '#666',
	...$styles,
}));

const List = ({ designId, borderType }) => {
	const [image, setImage] = useState('');
	const [isOver, setIsOver] = useState(false);
	const [titleOn, setTitleOn] = useState(false);
	const [title, setTitle] = useState('Title 입력');
	const [textOn, setTextOn] = useState(false);
	const [text, setText] = useState('Text 입력');

	const changeImageHandler = (e) => {
		const targetImg = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(targetImg);
		reader.onload = () => setImage(reader.result);
	};

	const changeTitleHandler = (e) => {
		const targetTitle = e.target.value;
		setTitle(targetTitle);
	};

	const changeTextHandler = (e) => {
		const targetText = e.target.value;
		setText(targetText);
	};

	return (
		<ListContainer>
			<ListArticle>
				<ImgSection
					onMouseEnter={() => setIsOver(true)}
					onMouseLeave={() => setIsOver(false)}
					$styles={
						borderType.includes('circle')
							? {
									width: '20vh',
									height: '20vh',
									borderRadius: '50%',
									border: '1px solid black',
							  }
							: borderType.includes('rectangle1_list')
							? {
									width: '25h',
									height: '15vh',
							  }
							: borderType.includes('square_list')
							? {
									width: '20vh',
									height: '20vh',
							  }
							: borderType.includes('rectangle2_list')
							? {
									width: '30vh',
									height: '15vh',
							  }
							: {}
					}
				>
					{isOver ? (
						<label
							style={{ position: 'absolute', cursor: 'pointer' }}
							htmlFor="image_selector"
						>
							이미지 선택
							<input
								id="image_selector"
								accept="image/*"
								style={{ display: 'none' }}
								type="file"
								onChange={changeImageHandler}
							/>
						</label>
					) : null}
					<Image
						id={designId}
						src={image || `/images/lists/list_design_default.png`}
						alt={`image`}
						$styles={
							borderType.includes('circle')
								? {
										width: '100%',
										height: '100%',
										borderRadius: '50%',
										border: '1px solid black',
								  }
								: {}
						}
					/>
				</ImgSection>
				<TitleSetion>
					{titleOn ? (
						<>
							<input type="text" value={title} onChange={changeTitleHandler} />
							<button onClick={() => setTitleOn(false)}>저장</button>
						</>
					) : (
						<TitleStyled
							onClick={() => setTitleOn(true)}
							$styles={
								borderType.includes('circle')
									? {
											fontSize: '20px',
											color: '#231f20',
									  }
									: borderType.includes('rectangle1_list')
									? {
											fontSize: '18px',
											fontWeight: 'bold',
											color: '#333',
									  }
									: borderType.includes('square')
									? {
											fontSize: '20px',
											color: '#EE7D00',
									  }
									: borderType.includes('rectangle2_list')
									? { fontSize: '18px', fontWeight: 'bold', color: '#333' }
									: {}
							}
						>
							{title}
						</TitleStyled>
					)}

					{borderType.includes('circle') ? null : (
						<>
							{borderType.includes('square') ? (
								<TextStyled
									$styles={
										borderType.includes('square')
											? { fontSize: '11px', fontWeight: 'bold', color: '#333' }
											: {}
									}
								>
									text2
								</TextStyled>
							) : null}
							{textOn ? (
								<>
									<input
										type="text"
										value={text}
										onChange={changeTextHandler}
									/>
									<button onClick={() => setTextOn(false)}>저장</button>
								</>
							) : (
								<TextStyled
									onClick={() => setTextOn(true)}
									$styles={
										borderType.includes('rectangle1_list')
											? {
													fontSize: '11px',
											  }
											: borderType.includes('square')
											? {
													fontSize: '13px',
											  }
											: borderType.includes('rectangle2_list')
											? {
													fontSize: '15px',
											  }
											: {}
									}
								>
									{text}
								</TextStyled>
							)}
						</>
					)}
				</TitleSetion>
			</ListArticle>
		</ListContainer>
	);
};

export default List;

List.propTypes = {
	designId: PropTypes.string,
	borderType: PropTypes.string,
};
