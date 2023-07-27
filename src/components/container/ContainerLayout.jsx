import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateLayoutType } from '../../store/slices/containerSlice';
import { useMemo } from 'react';

const StyledLayout = styled.div`
	width: 60%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	float: right;
`;

const ContainerLayout = ({ containerId, type = 'container_two' }) => {
	const dispatch = useDispatch();

	return (
		<StyledLayout>{type === 'container_two' ? <div></div> : null}</StyledLayout>
	);
};

export default ContainerLayout;

ContainerLayout.propTypes = {
	containerId: PropTypes.number,
	type: PropTypes.string,
};
