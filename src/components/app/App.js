import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomCharContainer';
import CharList from '../charList/CharListContainer';
import CharInfo from '../charInfo/CharInfoContainer';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const App = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	const handleSelectChar = (id) => {
		setSelectedChar(id);
	};

	return (
		<div className="app">
			<AppHeader />
			<main>
				<ErrorBoundary>
					<RandomChar />
				</ErrorBoundary>
				<div className="char__content">
					<ErrorBoundary>
						<CharList handleSelectChar={handleSelectChar} selectedChar={selectedChar} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo selectedChar={selectedChar} />
					</ErrorBoundary>
				</div>
				<img className="bg-decoration" src={decoration} alt="vision" />
			</main>
		</div>
	);
};

export default App;
