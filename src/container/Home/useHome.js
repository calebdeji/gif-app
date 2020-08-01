import { TRIGGER_SEARCH_STATE, UPDATE_SEARCH_VALUE } from "../../redux/action";
import useFetchingAndError from "../../hooks/useFetchingAndError";

const { useEffect } = require("react");
const { default: Axios } = require("axios");
const { default: fetchGif } = require("./fecthGif");

const useHome = ({ homeState, saveHomeState }) => {
    const { isFetching, isError, setisFetching, handleErrorMessage } = useFetchingAndError();
    useEffect(() => {
        const source = Axios.CancelToken.source();
        (async () => {
            const isSearchTrigger = homeState[TRIGGER_SEARCH_STATE];
            if (isSearchTrigger) setisFetching(true);
            let keyword = isSearchTrigger ? homeState[UPDATE_SEARCH_VALUE] : undefined;
            const { isError, data, errorMessage } = await fetchGif(source, keyword);
            if (isError) {
                handleErrorMessage(errorMessage);
            } else {
                saveHomeState(data);
            }
            setisFetching(false);
        })();
        return () => {
            source.cancel("Operation cancelled");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [homeState[TRIGGER_SEARCH_STATE], homeState[UPDATE_SEARCH_VALUE]]);
    return { isError, isFetching };
};
export default useHome;
