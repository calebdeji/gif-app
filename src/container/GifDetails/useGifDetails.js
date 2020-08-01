import useFetchingAndError from "../../hooks/useFetchingAndError";

const { useEffect, useState } = require("react");
const { default: Axios } = require("axios");
const { useParams, useHistory } = require("react-router-dom");
const { default: fetchGifDetails } = require("./fetchGifDetails");

const useGifDetails = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const { isFetching, isError, setisFetching, handleErrorMessage } = useFetchingAndError();
    const [dataFetched, setdataFetched] = useState({});
    const handleGoBack = () => {
        push("/");
    };
    useEffect(() => {
        const source = Axios.CancelToken.source();
        (async () => {
            const { isError, data, errorMessage } = await fetchGifDetails(source, id);
            if (isError) {
                handleErrorMessage(errorMessage);
            } else {
                setdataFetched(data);
            }
            setisFetching(false);
        })();
        return () => {
            source.cancel("Operation cancelled");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { isError, isFetching, dataFetched, handleGoBack };
};

export default useGifDetails;
