import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useMarvelService } from "../../services/useMarvelService";

import Loader from "../../ui/customLoader/CustomLoader";
import Error from "../../ui/error/Error";
import ComicPage from "./ComicPage";

const ComicPageContainer = () => {
	const [comic, setComic] = useState({});
	const { id } = useParams();
	const { getOneComic, loading, error } = useMarvelService();

	useEffect(() => {
		(async (id) => {
			const res = await getOneComic(id);
			setComic(res);
		})(id);
	}, [id]);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <Error />;
	}

	return <ComicPage comic={comic} />;
};

export default ComicPageContainer;
