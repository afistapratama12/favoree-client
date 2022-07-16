import { useEffect, useState } from "react";
import { Axios } from "./axios";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("start call " + url)

    useEffect(() => {
        if (!url) {
            return
        }

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        return fetchData();
    }, [url]);

    return [ data, loading, error ];
}

export const useAxios = (method, url, auth, body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("start call " + url)

    useEffect(() => {
        const fetchAxios = async () => {
            try {
                let req = {
                    method: method,
                    url: url,
                }

                if (auth) {
                    req.headers = {
                        Authorization: auth
                    }
                }

                if (body) {
                    req.data = body;
                }
                
                const { data } = await Axios(req);

                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchAxios();
    }, [method, url, auth, body]);

    return [ data, loading, error ];
}