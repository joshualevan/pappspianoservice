import './style.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: "Papp's Piano Service | NE Ohio Piano Tuning",
	description:
		"Josh Papp, owner and sole operator of Papp's Piano Service, offers piano tuning for pianos of all makes and models. In addition to tuning, He also offers exceptional action regulation services, and repairs of most common piano problems. Based in University Heights, Josh's service area includes Cuyahoga County, Summit County, eastern Lorain County, western Lake County, and western Geauga County.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{/* <style>
					@import
					url('https://fonts.googleapis.com/css2?family=Oswald&family=Staatliches&display=swap');
				</style> */}
				{children}
			</body>
		</html>
	);
}
