import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	place-self: center;
	background-color: #ececec;
	border-radius: ${(props) => props.$borderRadius};
`;

const StyledImg = styled.img`
	width: 100%;
	height: 100%;
	display: block;
`;

const Image = ({ designId }) => {
	const [image, setImage] = useState('');
	const [isOver, setIsOver] = useState(false);

	const changeImageHandler = (e) => {
		const targetImg = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(targetImg);
		reader.onload = () => setImage(reader.result);
	};

	return (
		<ImageContainer
			onMouseEnter={() => setIsOver(true)}
			onMouseLeave={() => setIsOver(false)}
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
			<StyledImg
				id={designId}
				src={image || `/images/image_logo.png`}
				alt={`image`}
			/>
		</ImageContainer>
	);
};

export default Image;

Image.propTypes = {
	designId: PropTypes.string,
	list: PropTypes.object,
};
