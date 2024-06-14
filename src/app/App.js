import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../components/appHeader/AppHeader";
import Loader from "../ui/customLoader/CustomLoader";

const CharactersPage = lazy(() => import("../pages/CharactersPage/CharactersPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage/ComicsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ComicPage = lazy(() => import("../pages/ComicPage/ComicPageContainer"));

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<main>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route index path="/" element={<CharactersPage />} />
						<Route path="/characters" element={<CharactersPage />} />
						<Route path="/comics" element={<ComicsPage />} />
						<Route path="/comics/:id" element={<ComicPage />} />
						<Route path="/404" element={<NotFoundPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</main>
		</div>
	);
};

export default App;
