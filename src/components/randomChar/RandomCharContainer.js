import { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";

import RandomChar from "./RandomChar";

const RandomCharContainer = () => {
	const [character, setCharacter] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		handleRandomChar();
	}, []);

	const handleRandomChar = async () => {
		setLoading(true);
		try {
			const character = await MarvelService.getRandomCharacter();
			setCharacter(character);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setError(true);
			setLoading(false);
		}
	};

	return (
		<RandomChar
			char={character}
			loading={loading}
			error={error}
			handleRandomChar={handleRandomChar}
		/>
	);
};

export default RandomCharContainer;
