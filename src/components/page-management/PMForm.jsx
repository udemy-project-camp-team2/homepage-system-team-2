import PropTypes from 'prop-types';

const PMForm = ({ name, targetList }) => {
	return (
		<div>
			<input type="text" />
			<input
				type="text"
				value={name === '상세' ? targetList.link : ''}
				onChange={(e) => console.log(e.target.value)}
				readOnly={name === '상세' ? true : false}
				disabled={name === '상세' ? true : false}
			/>
		</div>
	);
};

export default PMForm;

PMForm.propTypes = {
	name: PropTypes.string,
	targetList: PropTypes.object,
};
