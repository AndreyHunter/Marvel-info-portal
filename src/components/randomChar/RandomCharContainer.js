import { useEffect, useState } from "react";
import { useMarvelService } from "../../services/useMarvelService";

import RandomChar from "./RandomChar";

const RandomCharContainer = () => {
	const [character, setCharacter] = useState({});
	const { getRandomCharacter, loading, error } = useMarvelService();

	useEffect(() => {
		handleRandomChar();
	}, []);

	const handleRandomChar = async () => {
		const res = await getRandomCharacter();
		setCharacter(res);
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
