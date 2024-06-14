import "./comicPage.scss";

const ComicPage = ({ comic }) => {
	return (
		<div className="single-comic">
			<img src={comic.image} alt={comic.title} className="single-comic__img" />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{comic.title}</h2>
				<p className="single-comic__descr">{comic.description}</p>
				<p className="single-comic__descr">{comic.pages} pages</p>
				<p className="single-comic__descr">Language: {comic.language || "en-us"}</p>
				<div className="single-comic__price">{comic.price?.price}$</div>
			</div>
			<a href="#" className="single-comic__back">
				Back to all
			</a>
		</div>
	);
};

export default ComicPage;
