import PropTypes from 'prop-types';

import Skeleton from '../skeleton/Skeleton';
import Loader from '../CustomLoader/CustomLoader';
import Error from '../error/Error';

import { isImageNotFound } from '../charListItem/CharListItem';

import './charInfo.scss';

const CharInfo = ({
	selectedChar,
	name,
	description,
	image,
	homePage,
	wiki,
	items,
	loading,
	error,
}) => {
	return (
		<div className="char__info">
			{!selectedChar ? (
				<Skeleton />
			) : loading ? (
				<Loader />
			) : error ? (
				<Error />
			) : (
				<>
					<div className="char__basics">
						<img src={image} alt={name} style={isImageNotFound(image)} />
						<div>
							<div className="char__info-name">{name}</div>
							<div className="char__btns">
								<a href={homePage} className="button button__main">
									<div className="inner">homepage</div>
								</a>
								<a href={wiki} className="button button__secondary">
									<div className="inner">Wiki</div>
								</a>
							</div>
						</div>
					</div>
					<div className="char__descr">
						{description ||
							"To view a full description, go to the character's home page"}
					</div>
					<div className="char__comics">Comics:</div>
					<ul className="char__comics-list">
						{items && items.length > 0
							? items
									.map((comics, index) => (
										<li key={index} className="char__comics-item">
											<a href={comics.resourceURI} target="blank">
												{comics.name}
											</a>
										</li>
									))
									.slice(0, 10)
							: 'Comics not found'}
					</ul>
				</>
			)}
		</div>
	);
};

CharInfo.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	selectedChar: PropTypes.number,
	image: PropTypes.string,
	homePage: PropTypes.string,
	wiki: PropTypes.string,
	items: PropTypes.array,
	loading: PropTypes.bool,
	error: PropTypes.bool,
};

export default CharInfo;
