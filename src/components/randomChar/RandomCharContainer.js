import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import RandomChar from './RandomChar';

class RandomCharContainer extends Component {
	state = {
		character: {},
		loading: false,
		error: null,
	};

	componentDidMount() {
		this.handleRandomChar();
	}

	handleRandomChar = async () => {
		this.setState({ loading: true });
		try {
			const character = await MarvelService.getRandomCharacter();
			this.onCharLoaded(character);
		} catch {
			this.setState({ loading: false, error: true });
		}
	};

	onCharLoaded = (character) => {
		this.setState({ character, loading: false });
	};

	render() {
		const { character, loading, error } = this.state;

		return (
			<RandomChar
				char={character}
				loading={loading}
				error={error}
				handleRandomChar={this.handleRandomChar}
			/>
		);
	}
}

export default RandomCharContainer;
