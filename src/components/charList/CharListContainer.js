import { Component } from 'react';
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
		this.handleGetCharList();
	}

	handleGetCharList = async () => {
		this.setState({ loading: true });
		try {
			const charList = await MarvelService.getAllCharacters(this.state.offset);
			this.setState({
				charList,
				loading: false,
			});
		} catch (err) {
			this.setState({ error: true, loading: false });
		}
	};

	handleGetMoreCharList = async () => {
		this.setState({ moreItemsLoading: true });
		try {
			const chars = await MarvelService.getAllCharacters(this.state.offset + 9);
			this.setState(({ charList, offset }) => ({
				charList: [...charList, ...chars],
				moreItemsLoading: false,
				offset: offset + 9,
			}));
		} catch (err) {
			this.setState({ error: true, moreItemsLoading: false });
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
				handleGetMoreCharList={this.handleGetMoreCharList}
				loading={moreItemsLoading}
				offset={offset}
			/>
		);
	}
}

export default CharListContainer;
