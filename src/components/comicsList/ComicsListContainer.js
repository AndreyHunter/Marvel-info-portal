import { useEffect, useState } from "react";
import { useMarvelService } from "../../services/useMarvelService";

import Loader from "../../components/CustomLoader/CustomLoader";
import Error from "../../components/error/Error";
import ComicsList from "./ComicsList";

const ComicsListContainer = () => {
	const [comicsList, setComicsList] = useState([]);
	const { getAllComics, error } = useMarvelService();
	const [loading, setLoading] = useState(false);
	const [moreItemsLoading, setMoreItemsLoading] = useState(false);
	const [offset, setOffset] = useState(100);

	useEffect(() => {
		getComics(offset, true);
	}, []);

	const getComics = async (offset, intLoading = false) => {
		if (intLoading) {
			setLoading(true);
		}
		setMoreItemsLoading(true);
		try {
			const comics = await getAllComics(offset);
			setComicsList((prev) => [...prev, ...comics]);
			setOffset(offset);
		} catch (err) {
			console.error(err);
		} finally {
			if (intLoading) {
				setLoading(false);
			}
			setMoreItemsLoading(false);
		}
	};

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <Error />;
	}
	
	console.log(comicsList)

	return (
		<ComicsList
			comicsList={comicsList}
			offset={offset}
			loading={moreItemsLoading}
			handleGetComics={() => getComics(offset + 9)}
		/>
	);
};

export default ComicsListContainer;
