import Logo from '../components/Logo';

const Header = () => {
	const publicUrl = process.env.PUBLIC_URL;
	console.log(publicUrl);
	return (
		<header id="top">
			<Logo />
			<nav>
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#portfolio">My Work</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
