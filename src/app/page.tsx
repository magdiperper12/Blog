import Image from 'next/image';
import Content from './content/content';
import Footer from './footer/footer';
import Header from './header/header';

export default function Home() {
	return (
		<div>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}
