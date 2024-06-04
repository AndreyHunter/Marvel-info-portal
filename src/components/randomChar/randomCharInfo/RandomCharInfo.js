import { StringUtils } from '../../../utils/index';

import Error from '../../error/Error';
import Loader from '../../CustomLoader/CustomLoader';

import './randomCharInfo.scss';

const RandomCharInfo = ({ name, description, image, homePage, wiki, loading, error }) => {
	return (
		<div className="randomchar__block">
			{loading && <Loader />}
			{error && <Error />}
			{!loading && !error && (
				<>
					<img src={image} alt={name} className="randomchar__img" />
					<div className="randomchar__info">
						<p className="randomchar__name">{name}</p>
						<p className="randomchar__descr">
							{StringUtils.sliceString(description, 0, 200) ||
								"To view a full description, go to the character's home page"}
						</p>
						<div className="randomchar__btns">
							<a href={homePage} className="button button__main">
								<div className="inner">homepage</div>
							</a>
							<a href={wiki} className="button button__secondary">
								<div className="inner">Wiki</div>
							</a>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default RandomCharInfo;
