import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PMTableBody = ({ pageLists, offset }) => {
	const navigate = useNavigate();
	return (
		<tbody>
			{pageLists.length > 0 ? (
				pageLists.slice(offset, offset + 10).map((list) => (
					<tr key={list.title}>
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
				))
			) : (
				<tr>
					<td>no data</td>
				</tr>
			)}
		</tbody>
	);
};

export default PMTableBody;

PMTableBody.propTypes = {
	offset: PropTypes.number,
	pageLists: PropTypes.array,
};
