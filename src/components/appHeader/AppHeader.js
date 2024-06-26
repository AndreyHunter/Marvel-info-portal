import { NavLink } from "react-router-dom";

import "./appHeader.scss";

const AppHeader = () => {
	return (
		<header className="app__header">
			<h1 className="app__title">
				<NavLink to="/">
					<span>Marvel</span> information portal
				</NavLink>
			</h1>
			<nav className="app__menu">
				<ul>
					<li>
						<NavLink to="/" className="header-link">
							Characters
						</NavLink>
					</li>
					/
					<li>
						<NavLink to="/comics" className="header-link">
							Comics
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
