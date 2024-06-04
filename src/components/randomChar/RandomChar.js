import RandomCharInfo from './randomCharInfo/RandomCharInfo';
import RandomCharControll from './randomCharControll/RandomCharControll';

import './randomChar.scss';

const RandomChar = ({ char, loading, error, handleRandomChar }) => {
	return (
		<div className="randomchar">
			<RandomCharInfo {...char} loading={loading} error={error} />
			<RandomCharControll handleRandomChar={handleRandomChar} />
		</div>
	);
};

export default RandomChar;
