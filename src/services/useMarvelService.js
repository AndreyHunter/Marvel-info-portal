import { BASE_URL, API_KEY } from "./constants";
import { useHttp } from "../hooks/useHttp";

const useMarvelService = () => {
	const { request, loading, error } = useHttp(BASE_URL);

	const getAllCharacters = async (offset) => {
		const res = await request({
			url: `/characters?offset=${offset}&limit=9&${API_KEY}`,
		});
		return res.data.results.map(_transformCharData);
	};

	const getBiId = async (id) => {
		const res = await request({ url: `${BASE_URL}/characters/${id}?${API_KEY}` });
		return _transformCharData(res.data.results[0]);
	};

	const getCharInfoBiId = async (id) => {
		const res = await request({ url: `/characters/${id}?${API_KEY}` });
		return _transformCharInfoData(res.data.results[0]);
	};

	const getRandomCharacter = async () => {
		const randomOffsetIndex = Math.floor(Math.random() * 1565);

		const randomCharacterData = await request({
			url: `/characters?offset=${randomOffsetIndex}&limit=1&${API_KEY}`,
		});

		return _transformCharData(randomCharacterData.data.results[0]);
	};

	const _transformCharInfoData = (char) => {
		const defaultData = _transformCharData(char);
		const {
			comics: { items },
		} = char;
		return {
			...defaultData,
			items,
		};
	};

	const _transformCharData = (char) => {
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

	return {
		getAllCharacters,
		getBiId,
		getCharInfoBiId,
		getRandomCharacter,
		loading,
		error,
	};
};

export { useMarvelService };
