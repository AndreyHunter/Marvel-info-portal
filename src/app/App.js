import { Route, Routes } from "react-router-dom";

import AppHeader from "../components/appHeader/AppHeader";

import { CharactersPage, ComicsPage } from "../pages";

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<main>
				<Routes>
					<Route index path="/" element={<CharactersPage />} />
					<Route path="/comics" element={<ComicsPage />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
