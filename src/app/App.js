import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import AppHeader from "../components/appHeader/AppHeader";

import { CharactersPage, ComicsPage } from "../pages";

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<main>
				<Switch>
					<Route exact path="/" component={CharactersPage} />
					<Route path="/comics" component={ComicsPage} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
