import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MainPage = () => {
	const { id } = useParams();
	const containers = useSelector((state) => state.containers);

	return (
		<section>
			{containers.map((container) => (
				<div
					key={container.id}
					style={{ height: '10vh', border: '1px solid #000' }}
				>
					New Container!
				</div>
			))}
		</section>
	);
};

export default MainPage;
