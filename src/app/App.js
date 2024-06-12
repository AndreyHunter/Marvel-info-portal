import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import AppHeader from "../components/appHeader/AppHeader";

import CharactersPage from "../pages/CharactersPage/CharactersPage";
import ComicsPage from "../pages/ComicsPage/ComicsPage";

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<main>
				<Switch>
					<Route exact path="/" component={CharactersPage} />
					<Route exact path="/characters" component={CharactersPage} />
					<Route exact path="/comics" component={ComicsPage} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
