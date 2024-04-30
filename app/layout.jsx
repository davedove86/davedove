import '../assets/styles/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
	title: 'Dave Dove | Full Stack Developer | Home',
	description: 'A Full Stack Developer with a passion for creating web applications and solving problems.',
	keywords: 'Full Stack Developer, React, Node.js, Express, MongoDB, JavaScript, HTML, CSS, SASS, TailwindCSS, API, Web Development, Web Design',
};

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className='dark:bg-dark bg-white dark:text-white text-text px-4'>
        <Navbar />
				<main>{children}</main>
        <Footer />
			</body>
		</html>
	);
};

export default MainLayout;
