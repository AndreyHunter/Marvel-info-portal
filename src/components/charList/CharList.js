import Loader from '../CustomLoader/CustomLoader';
import CharListItem from '../charListItem/CharListItem';

import './charList.scss';

const CharList = ({
	charList,
	selectedChar,
	handleSelectChar,
	handleGetMoreCharList,
	loading,
	offset,
}) => {
	return (
		<div className="char__list">
			<ul className="char__grid">
				{charList.map((char) => (
					<CharListItem
						key={char.id}
						src={char.image}
						name={char.name}
						selectedChar={selectedChar === char.id}
						handleSelectChar={() => handleSelectChar(char.id)}
					/>
				))}
			</ul>
			<div className="more">
				<div>{loading ? <Loader /> : null}</div>
				<button
					className="button button__main button__long"
					onClick={handleGetMoreCharList}
					disabled={loading ? true : offset >= 1559 ? true : false}
				>
					<div className="inner">load more</div>
				</button>
			</div>
		</div>
	);
};

export default CharList;
