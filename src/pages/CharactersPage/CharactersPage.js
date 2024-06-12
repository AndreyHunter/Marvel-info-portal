import { useState } from "react";

import { CharList, CharInfo, RandomChar, ErrorBoundary } from "../../components";

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
