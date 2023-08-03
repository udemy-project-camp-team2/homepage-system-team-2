import PropTypes from 'prop-types';
import { Fragment, memo } from 'react';

const PMPaignation = ({
	length,
	currentPage,
	setCurrentPage,
	changePageHandler,
}) => {
	const maxPage = Math.ceil(length / 10);
	return (
		<Fragment>
			<button
				disabled={currentPage === 1}
				type="button"
				name="prev"
				onClick={changePageHandler}
			>
				&larr;
			</button>
			{Array.from({ length: maxPage }, (_, i) => i + 1).map((item) => (
				<button key={item} type="button" onClick={() => setCurrentPage(item)}>
					{item}
				</button>
			))}
			<button
				disabled={currentPage >= maxPage}
				type="button"
				name="next"
				onClick={changePageHandler}
			>
				&rarr;
			</button>
		</Fragment>
	);
};

export default memo(PMPaignation);

PMPaignation.propTypes = {
	length: PropTypes.number,
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
	changePageHandler: PropTypes.func,
};
