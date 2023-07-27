import { useDispatch, useSelector } from 'react-redux';
import { addDesign } from '../../store/slices/designSlice';
import DashedLine from '../models/designs/lines/DashedLine';
import BoldLine from '../models/designs/lines/BoldLine';

const LineTab = () => {
	const dispatch = useDispatch();
	const selectedId = useSelector((state) => state.selectedId.value);
	return (
		<div>
			<BoldLine
				onClick={(e) => {
					e.stopPropagation();
					dispatch(
						addDesign({
							id: selectedId,
							type: 'bold_line',
							length: 1,
						})
					);
				}}
			/>
			<DashedLine
				onClick={(e) => {
					e.stopPropagation();
					dispatch(
						addDesign({
							id: selectedId,
							type: 'dashed_line',
							length: 1,
						})
					);
				}}
			/>
		</div>
	);
};

export default LineTab;
