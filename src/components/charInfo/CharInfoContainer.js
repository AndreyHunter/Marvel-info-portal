import { useEffect, useState } from "react";

import MarvelService from "../../services/MarvelService";

import CharInfo from "./CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const CharInfoContainer = ({ selectedChar }) => {
	const [charInfo, setCharInfo] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (selectedChar) {
			getCharInfo(selectedChar);
		}
	}, [selectedChar]);

	const getCharInfo = async (id) => {
		setLoading(true);
		try {
			const charInfo = await MarvelService.getCharInfoBiId(id);
			setCharInfo(charInfo);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setError(true);
			setLoading(false);
		}
	};

	return <CharInfo {...charInfo} selectedChar={selectedChar} loading={loading} error={error} />;
};

export default CharInfoContainer;
