import { useState } from "react";

import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";

import RandomChar from "../../components/randomChar/RandomCharContainer";
import CharList from "../../components/charList/CharListContainer";
import CharInfo from "../../components/charInfo/CharInfoContainer";

import decoration from "../../resources/img/vision.png";

import "./CharactersPage.scss";

const CharactersPage = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	const handleSelectChar = (id) => {
		setSelectedChar(id);
	};

	return (
		<>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className="char__content">
				<ErrorBoundary>
					<CharList selectedChar={selectedChar} handleSelectChar={handleSelectChar} />
				</ErrorBoundary>
				<ErrorBoundary>
					<CharInfo selectedChar={selectedChar} />
				</ErrorBoundary>
			</div>
			<img className="bg-decoration" src={decoration} alt="vision" />
		</>
	);
};

export default CharactersPage;
