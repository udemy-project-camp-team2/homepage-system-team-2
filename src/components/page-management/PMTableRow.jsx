import PropTypes from 'prop-types';
import { Fragment, memo } from 'react';
import { useNavigate } from 'react-router-dom';

const PMTableRow = ({ list }) => {
	const navigate = useNavigate();
	return (
		<Fragment>
			<tr>
				<td>
					<input type="checkbox" name="checkbox" />
				</td>
				<td>{list.title}</td>
				<td>{list.link}</td>
				<td>{list.key}</td>
				<td>{new Date().toLocaleString()}</td>
				<td>
					<button type="button">상세</button>
					<button type="button">복제</button>
					<button type="button" onClick={() => navigate('/admin/edit')}>
						디자인
					</button>
				</td>
			</tr>
		</Fragment>
	);
};

export default memo(PMTableRow);

PMTableRow.propTypes = {
	list: PropTypes.object,
};
