import Countries from '../Components/Countries';
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';

const Home = () => {
	return (
		<div className='home'>
			<Navigation />
			<Logo />
			<Countries />
		</div>
	);
};

export default Home;
