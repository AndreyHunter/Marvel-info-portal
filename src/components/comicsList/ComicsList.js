import Loader from "../../ui/customLoader/CustomLoader";
import "./comicsList.scss";

const ComicsList = ({ comicsList, offset, loading, handleGetComics }) => {
	return (
		<div className="comics__list">
			<ul className="comics__grid">
				{comicsList.length &&
					comicsList.map((comic, index) => (
						<li key={index} className="comics__item">
							<a href={comic.url} target="blank">
								<img
									src={comic.image}
									alt={comic.title}
									className="comics__item-img"
								/>
								<div className="comics__item-name">{comic.title}</div>
								<div className="comics__item-price">
									{comic.price.price ? `${comic.price.price}$` : "NOT-AVAILABLE"}
								</div>
							</a>
						</li>
					))}
			</ul>

			<div className="more">
				<div>{loading && <Loader />}</div>
				{offset >= 138 ? null : (
					<button
						className="button button__main button__long"
						onClick={handleGetComics}
						disabled={loading}
					>
						<div className="inner">load more</div>
					</button>
				)}
			</div>
		</div>
	);
};

export default ComicsList;
