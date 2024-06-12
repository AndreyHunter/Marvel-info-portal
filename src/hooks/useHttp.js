import { useState, useCallback, useEffect, useRef } from "react";
import md5 from "crypto-js/md5";

import { API_KEY, PRIVATE_KEY } from "../services/constants";

const useHttp = (InitialUrl) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const abortControllerRef = useRef(null);

	const request = useCallback( async ({
			url,
			method = "GET",
			body = null,
			headers = { "Content-type": "application/json" },
		}) => {
			setLoading(true);

			const ts = new Date().getTime();
			const hash = md5(ts + PRIVATE_KEY + API_KEY).toString();

			const separator = url.includes("?") ? "&" : "?";
			const fullUrl = `${InitialUrl}${url}${separator}ts=${ts}&apikey=${API_KEY}&hash=${hash}`;

			try {
				const res = await fetch(fullUrl, {
					method,
					body,
					headers,
					signal: abortControllerRef.current.signal,
				});

				if (!res.ok) {
					throw new Error("Failed to fetch");
				}

				const data = await res.json();

				setLoading(false);
				return data;
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		},
		[InitialUrl]
	);

	const clearError = useCallback(() => setError(null), [setError]);

	useEffect(() => {
		abortControllerRef.current = new AbortController();

		return () => {
			abortControllerRef?.current.abort();
		};
	}, []);

	return {
		request,
		error,
		clearError,
		loading,
	};
};

export { useHttp };
