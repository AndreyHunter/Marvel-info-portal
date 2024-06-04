import { Component } from 'react';

import MarvelService from '../../services/MarvelService';

import CharInfo from './CharInfo';

class CharInfoContainer extends Component {
	state = {
		charInfo: {},
		loading: false,
		error: null,
	};

	componentDidMount() {
		this.getCharInfo(this.props.selectedChar);
	}

	componentDidUpdate(prevProps) {
		const { selectedChar } = this.props;
		if (selectedChar !== prevProps.selectedChar) {
			this.getCharInfo(selectedChar);
		}
	}

	getCharInfo = async (id) => {
		if (!id) return;

		this.setState((state) => ({
			...state,
			loading: true,
		}));
		try {
			const charInfo = await MarvelService.getCharInfoBiId(id);

			this.setState((state) => ({
				...state,
				charInfo,
				loading: false,
			}));
		} catch (err) {
			this.setState((state) => ({
				...state,
				loading: false,
				error: true,
			}));
		}
	};

	render() {
		const { charInfo, loading, error } = this.state;
		const { selectedChar } = this.props;

		return <CharInfo selectedChar={selectedChar} {...charInfo} loading={loading} error={error} />;
	}
}

export default CharInfoContainer;
