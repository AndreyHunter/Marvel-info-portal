import { BASE_URL, API_KEY } from './constans';

class MarvelService {
	getResource = async (url) => {
		try {
			const res = await fetch(url);

			if (!res.ok) {
				throw new Error(`Could not fetch ${url}, status: ${res.status}`);
			}

			return await res.json();
		} catch (err) {
			console.log(err);
		}
	};

	getAllCharacters = async (offset) => {
		const res = await this.getResource(
			`${BASE_URL}/characters?offset=${offset}&limit=9&${API_KEY}`,
		);
		return res.data.results.map(this._transformCharData);
	};

	getBiId = async (id) => {
		const res = await this.getResource(`${BASE_URL}/characters/${id}?${API_KEY}`);
		return this._transformCharData(res.data.results[0]);
	};

	getCharInfoBiId = async (id) => {
		const res = await this.getResource(`${BASE_URL}/characters/${id}?${API_KEY}`);
		return this._transformCharInfoData(res.data.results[0]);
	};

	getRandomCharacter = async () => {
		const randomOffsetIndex = Math.floor(Math.random() * 1565);

		const randomCharacterData = await this.getResource(
			`${BASE_URL}/characters?offset=${randomOffsetIndex}&limit=1&${API_KEY}`,
		);

		return this._transformCharData(randomCharacterData.data.results[0]);
	};

	// getRandomById = async () => {
	// 	const randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
	// 	const res = await this.getBiId(randomId);
	// 	return res.data.results[0];
	// };

	_transformCharInfoData = (char) => {
		const defaultData = this._transformCharData(char);
		const {
			comics: { items },
		} = char;
		return {
			...defaultData,
			items,
		};
	};

	_transformCharData = (char) => {
		const { id, name, description, thumbnail, urls } = char;
		const image = `${thumbnail.path}.${thumbnail.extension}`;
		const homePage = urls[0]?.url;
		const wiki = urls[1]?.url;

		return {
			id,
			name,
			description,
			image,
			homePage,
			wiki,
		};
	};
}

export default new MarvelService();

// postData = async (url, body) => {
// 	try {
// 		const res = await fetch(url, {
// 			method: 'POST',
// 			body,
// 		});

// 		if (!res.ok) {
// 			throw new Error(
// 				`Could not fetch ${url}, status: ${res.status}`,
// 			);
// 		}

// 		return await res.json();
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
