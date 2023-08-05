import PropTypes from 'prop-types';
import CommonLayout from './CommonLayout';

const layoutsConfig = {
  container_one: 1,
  container_two: 2,
  container_three: 3,
  container_four: 4,
};

const ContainerLayout = ({ type }) => {
  const numRectangles = layoutsConfig[type] || 0;

  return (
    <div>
      <CommonLayout numRectangles={numRectangles} />
    </div>
  );
};

export default ContainerLayout;

ContainerLayout.propTypes = {
  type: PropTypes.string,
};
