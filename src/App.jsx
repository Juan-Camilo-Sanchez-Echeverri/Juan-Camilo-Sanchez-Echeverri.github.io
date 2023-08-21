import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';

function App() {
	return (
		<>
			<Header />
			<About />
			<Experience />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
