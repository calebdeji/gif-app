import Axios from "axios";
import destructureErrorObject from "../../services/destructureErrorResponse";

const fetchGif = async (source, keyword = undefined) => {
    try {
        const apiKey = process.env.REACT_APP_APIKEY;
        const limit = 20;
        const url = keyword
            ? `${process.env.REACT_APP_baseAPI}/search?api_key=${apiKey}&limit={limit}&q=${keyword}`
            : `${process.env.REACT_APP_baseAPI}/trending?api_key=${apiKey}&limit=${limit}`;
        const {
            data: { data },
        } = await Axios.get(url, { cancelToken: source.token });
        console.log({ data, url });
        return { isError: false, data };
    } catch (error) {
        return destructureErrorObject(error);
    }
};

export default fetchGif;
