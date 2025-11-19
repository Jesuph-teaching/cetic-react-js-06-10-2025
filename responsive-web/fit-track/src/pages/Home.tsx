import HeroSection from '../components/home/HeroSection';
import PopularChallenges from '../components/home/PopularChallenges';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function Home() {
	return (
		<>
			<header className="flex flex-col">
				<Navbar />
				<HeroSection />
			</header>
			<main className="flex flex-col flex-1">
				<PopularChallenges />
			</main>
			<Footer />
		</>
	);
}
