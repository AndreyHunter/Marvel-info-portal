import error from './error.gif';

import './Error.scss';

const Error = () => {
	return (
		<div className='errorMessage'>
			<img src={error} alt="Error" />
		</div>
	);
};

export default Error;
