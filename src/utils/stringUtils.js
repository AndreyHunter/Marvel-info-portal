export const sliceString = (str, min = 0, max) => {
	if (!str) return null;
	if (str.length < max) return str;
	return `${str.slice(min, max)}...`;
};
