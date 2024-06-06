import { Component } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';

import Loader from '../CustomLoader/CustomLoader';
import Error from '../error/Error';

import CharList from './CharList';

class CharListContainer extends Component {
	state = {
		charList: [],
		loading: false,
		error: false,
		moreItemsLoading: false,
		offset: 120,
	};

	componentDidMount() {
		this.setState({ loading: true });
		this.loadCharacters(this.state.offset);
	}

	loadCharacters = async (newOffset) => {
		this.setState({ moreItemsLoading: true });
		try {
			const chars = await MarvelService.getAllCharacters(newOffset);
			this.setState(({ charList }) => ({
				charList: [...charList, ...chars],
				offset: newOffset,
				loading: false,
				moreItemsLoading: false,
			}));
		} catch (err) {
			this.setState({ error: true, loading: false, moreItemsLoading: false });
		}
	};

	render() {
		const { charList, loading, error, moreItemsLoading, offset } = this.state;
		const { handleSelectChar, selectedChar } = this.props;

		if (loading) {
			return <Loader />;
		}

		if (error) {
			return <Error />;
		}

		return (
			<CharList
				charList={charList}
				selectedChar={selectedChar}
				handleSelectChar={handleSelectChar}
				loadCharacters={() => this.loadCharacters(offset + 9)}
				loading={moreItemsLoading}
				offset={offset}
			/>
		);
	}
}

CharListContainer.propTypes = {
	handleSelectChar: PropTypes.func,
	selectedChar: PropTypes.number,
};

export default CharListContainer;
