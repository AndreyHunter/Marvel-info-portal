import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useMarvelService } from "../../services/useMarvelService";

import Loader from "../../ui/customLoader/CustomLoader";
import Error from "../../ui/error/Error";

import CharList from "./CharList";

const CharListContainer = ({ selectedChar, handleSelectChar }) => {
	const [charList, setCharList] = useState([]);
	const { getAllCharacters, error } = useMarvelService();
	const [loading, setLoading] = useState(false);
	const [moreItemsLoading, setMoreItemsLoading] = useState(false);
	const [offset, setOffset] = useState(180);

	useEffect(() => {
		setLoading(true);
		loadCharacters(offset);
	}, []);

	const loadCharacters = async (offset) => {
		setMoreItemsLoading(true);
		try {
			const characters = await getAllCharacters(offset);
			setCharList((prevState) => [...prevState, ...characters]);
			setMoreItemsLoading(false);
			setLoading(false);
			setOffset(offset);
		} catch (err) {
			console.log(err);
			setMoreItemsLoading(false);
			setLoading(false);
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
