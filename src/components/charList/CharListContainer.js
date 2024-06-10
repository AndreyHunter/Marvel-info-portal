import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MarvelService from "../../services/MarvelService";

import Loader from "../CustomLoader/CustomLoader";
import Error from "../error/Error";

import CharList from "./CharList";

const CharListContainer = ({ selectedChar, handleSelectChar }) => {
	const [charList, setCharList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [moreItemsLoading, setMoreItemsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [offset, setOffset] = useState(180);

	useEffect(() => {
		setLoading(true);
		loadCharacters(offset);
	}, []);

	const loadCharacters = async (offset) => {
		setMoreItemsLoading(true);
		try {
			const characters = await MarvelService.getAllCharacters(offset);
			setCharList((prevState) => [...prevState, ...characters]);
			setLoading(false);
			setMoreItemsLoading(false);
			setOffset(offset);
		} catch (err) {
			console.log(err);
			setError(true);
			setLoading(false);
			setMoreItemsLoading(false);
		}
	};

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <Error />;
	}

	return (
		<CharList
			charList={charList}
			selectedChar={selectedChar}
			handleSelectChar={handleSelectChar}
			loadCharacters={() => loadCharacters(offset + 9)}
			loading={moreItemsLoading}
		/>
	);
};

CharListContainer.propTypes = {
	handleSelectChar: PropTypes.func,
	selectedChar: PropTypes.number,
};

export default CharListContainer;
