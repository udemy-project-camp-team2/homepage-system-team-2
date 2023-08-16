import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ImageContainer = styled.div(({ $styles }) => ({
	margin: '0 0.5rem',
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	placeself: 'center',
	backgroundColor: '#ececec',
	...$styles,
}));

const StyledImg = styled.img(({ $styles }) => ({
	width: '100%',
	height: '100%',
	display: 'block',
	...$styles,
}));

const Image = ({ designId, borderType }) => {
	const [image, setImage] = useState('');
	const [isOver, setIsOver] = useState(false);
	// const selectedId = useSelector((state) => state.selectedId.selectedId);
	// const designStyles = useSelector(
	// 	(state) => state.design[selectedId]['styles'][designId]
	// );

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
			$styles={
				borderType.includes('circle')
					? {
							width: '100px',
							height: '100px',
							borderRadius: '50%',
							border: '1px solid black',
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
			<StyledImg
				id={designId}
				src={image || `/images/logos/woongjin.jpg`}
				alt={`image`}
				$styles={
					borderType.includes('circle')
						? {
								width: '100px',
								height: '100px',
								borderRadius: '50%',
								border: '1px solid black',
						  }
						: {}
				}
			/>
		</ImageContainer>
	);
};

export default Image;

Image.propTypes = {
	designId: PropTypes.string,
	borderType: PropTypes.string,
};
