import './CharListItem.scss';

export const isImageNotFound = (src) => {
	let imageStyle = { objectFit: 'cover' };
	const image =
		src === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
			? (imageStyle = { objectFit: 'unset' })
			: imageStyle;

	return image;
};

const CharListItem = ({ src, name, selectedChar, handleSelectChar }) => {
	const clazz = `char-item ${selectedChar ? 'char-item_selected' : ''}`;

	return (
		<li className={clazz} onClick={handleSelectChar}>
			<img src={src} alt={name} style={isImageNotFound(src)}/>
			<div className="char-item__name">{name}</div>
		</li>
	);
};

export default CharListItem;
