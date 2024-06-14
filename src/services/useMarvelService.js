import { BASE_URL } from "./constants";
import { useHttp } from "../hooks/useHttp";

const useMarvelService = () => {
	const { request, loading, error, clearError } = useHttp(BASE_URL);

	// Characters

	const getAllCharacters = async (offset) => {
		clearError();
		const res = await request({
			url: `/characters?offset=${offset}&limit=9`,
		});
		return res.data.results.map(_transformCharData);
	};

	const getOneCharacter = async (id) => {
		clearError();
		const res = await request({ url: `/characters/${id}` });
		return _transformCharData(res.data.results[0]);
	};

	const getCharInfoBiId = async (id) => {
		clearError();
		const res = await request({ url: `/characters/${id}` });
		return _transformCharInfoData(res.data.results[0]);
	};

	const getRandomCharacter = async () => {
		clearError();
		const randomOffsetIndex = Math.floor(Math.random() * 1565);

		const randomCharacterData = await request({
			url: `/characters?offset=${randomOffsetIndex}&limit=1`,
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

	// comics

	const getAllComics = async (offset) => {
		clearError();
		const res = await request({ url: `/comics?offset=${offset}&limit=8` });
		return res.data.results.map(_transformComicsData);
	};

	const getOneComic = async (id) => {
		clearError();
		const res = await request({ url: `/comics/${id}` });
		return _transformSingleComicData(res.data.results[0]);
	};

	const _transformComicsData = (comics) => {
		const { id, title, thumbnail, prices } = comics;
		const image = `${thumbnail.path}.${thumbnail.extension}`;
		const price = prices[0] || prices[1];

		return {
			id,
			title,
			price,
			image,
			// url: urls[0]?.url,
		};
	};

	const _transformSingleComicData = (comics) => {
		const { id, title, thumbnail, prices, description, pageCount, textObjects } = comics;
		const image = `${thumbnail.path}.${thumbnail.extension}`;
		const price = prices[0] || prices[1];

		return {
			id,
			title,
			description,
			price: price.price,
			image,
			pages: pageCount,
			language: textObjects[0]?.language,
		};
	};

	return {
		getAllCharacters,
		getOneCharacter,
		getCharInfoBiId,
		getRandomCharacter,
		loading,
		error,
		getAllComics,
		getOneComic,
	};
};

export { useMarvelService };
