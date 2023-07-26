import PropTypes from 'prop-types';
import CommonLayout from './CommonLayout';

const ContainerLayout = ({ type = 'container_two' }) => {
	// useEffect(() => {
	// 	switch (type) {
	// 		case 'container_two':
	// 			return <CommonLayout length={2} />;
	// 		default:
	// 			return;
	// 	}
	// }, [type]);
	return <CommonLayout length={2} type={type} />;
};

export default ContainerLayout;

ContainerLayout.propTypes = {
	type: PropTypes.string,
};
