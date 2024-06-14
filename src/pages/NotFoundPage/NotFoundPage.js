import { Link } from "react-router-dom";
import Error from "../../ui/error/Error";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
	return (
		<div className="not-found">
			<h1 className="not-found__title">Page not found</h1>
			<Error variant="large" />
			<Link to="/" className="not-found__link">
				Go home
			</Link>
		</div>
	);
};

export default NotFoundPage;
