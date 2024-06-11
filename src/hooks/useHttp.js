import { useState, useCallback, useEffect, useRef } from "react";

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
			try {
				const res = await fetch(
					InitialUrl && !url ? InitialUrl : InitialUrl && url ? InitialUrl + url : url,
					{
						method,
						body,
						headers,
						signal: abortControllerRef.current.signal,
					}
				);

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
