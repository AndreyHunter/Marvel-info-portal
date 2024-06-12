import PropTypes from "prop-types";

import Loader from "../../ui/customLoader/CustomLoader";
import CharListItem from "../charListItem/CharListItem";

import "./charList.scss";

const CharList = ({
	charList,
	selectedChar,
	handleSelectChar,
	loadCharacters,
	loading,
	offset,
}) => {
	return (
		<div className="char-list">
			<ul className="char-list__content">
				{charList.map((char) => (
					<CharListItem
						key={char.id}
						src={char.image}
						name={char.name}
						isSelectedChar={selectedChar === char.id}
						handleSelectChar={() => handleSelectChar(char.id)}
					/>
				))}
			</ul>
			<div className="more">
				<div>{loading && <Loader />}</div>
				{offset >= 1559 ? null : (
					<button
						className="button button__main button__long"
						onClick={loadCharacters}
						disabled={loading ? true : false}
					>
						<div className="inner">load more</div>
					</button>
				)}
			</div>
		</div>
	);
};

CharList.propTypes = {
	charList: PropTypes.array,
	loadCharacters: PropTypes.func,
	loading: PropTypes.bool,
	offset: PropTypes.number,
	selectedChar: PropTypes.number,
	handleSelectChar: PropTypes.func,
};

export default CharList;
