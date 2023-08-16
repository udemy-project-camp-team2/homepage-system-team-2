import { useSelector } from '../store/hooks';

const MainPage = () => {
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
