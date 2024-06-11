import { useEffect, useState } from "react";

import { useMarvelService } from "../../services/useMarvelService";

import CharInfo from "./CharInfo";

const CharInfoContainer = ({ selectedChar }) => {
	const [charInfo, setCharInfo] = useState({});
	const { getCharInfoBiId, loading, error } = useMarvelService();

	useEffect(() => {
		if (selectedChar) {
			getCharInfo(selectedChar);
		}
	}, [selectedChar]);

	const getCharInfo = async (id) => {
		const charInfo = await getCharInfoBiId(id);
		setCharInfo(charInfo);
	};

	return <CharInfo {...charInfo} selectedChar={selectedChar} loading={loading} error={error} />;
};

export default CharInfoContainer;
