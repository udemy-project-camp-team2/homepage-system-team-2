import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slices/modalSlice';
const PMTableRow = ({ list }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	return (
		<tr>
			<td>
				<input type="checkbox" name="checkbox" />
			</td>
			<td>{list.title}</td>
			<td>{list.link}</td>
			<td>{list.key}</td>
			<td>{new Date().toLocaleString()}</td>
			<td>
				<button
					type="button"
					onClick={() =>
						dispatch(
							toggleModal({
								list,
								name: '상세',
							})
						)
					}
				>
					상세
				</button>
				<button
					type="button"
					onClick={() =>
						dispatch(
							toggleModal({
								title: list.title,
								name: '복제',
							})
						)
					}
				>
					복제
				</button>
				<button type="button" onClick={() => navigate('/admin/edit')}>
					디자인
				</button>
			</td>
		</tr>
	);
};

export default memo(PMTableRow);

PMTableRow.propTypes = {
	list: PropTypes.object,
};
