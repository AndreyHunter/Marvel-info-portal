import error from "./error.gif";

import "./Error.scss";

const Error = ({ variant }) => {
	const isLarge = variant === "large";

	return (
		<div
			className="errorMessage"
			style={{ width: isLarge ? 300 : 200, height: isLarge ? 300 : 200 }}
		>
			<img src={error} alt="Error" />
		</div>
	);
};

export default Error;
