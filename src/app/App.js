import { Route, Routes } from "react-router-dom";

import AppHeader from "../components/appHeader/AppHeader";

import { CharactersPage, ComicsPage, NotFoundPage } from "../pages";

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<main>
				<Routes>
					<Route index path="/" element={<CharactersPage />} />
					<Route path="/characters" element={<CharactersPage />} />
					<Route path="/comics" element={<ComicsPage />} />
					<Route index path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
