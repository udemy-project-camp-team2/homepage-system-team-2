import { useParams } from 'react-router-dom';

const MainPage = () => {
	const { id } = useParams();
	return <h1>{id}</h1>;
};

export default MainPage;
