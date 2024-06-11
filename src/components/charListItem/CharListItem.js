import PropTypes from "prop-types";

import "./CharListItem.scss";

export const isImageNotFound = (src) => {
	let imageStyle = { objectFit: "cover" };
	const image =
		src === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
			? (imageStyle = { objectFit: "unset" })
			: imageStyle;

	return image;
};

const CharListItem = ({ src, name, isSelectedChar, handleSelectChar }) => {
	const clazz = `char-item ${isSelectedChar ? "char-item_selected" : ""}`;

	return (
		<li
			tabIndex={0}
			className={clazz}
			onClick={handleSelectChar}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					handleSelectChar();
				}
			}}
		>
			<img src={src} alt={name} style={isImageNotFound(src)} />
			<div className="char-item__name">{name}</div>
		</li>
	);
};

CharListItem.propTypes = {
	src: PropTypes.string,
	name: PropTypes.string,
	selectedChar: PropTypes.bool,
	handleSelectChar: PropTypes.func,
};

export default CharListItem;
