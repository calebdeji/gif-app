const { default: Axios } = require("axios");
const { default: destructureErrorObject } = require("../../services/destructureErrorResponse");

const fetchGifDetails = async (source, id) => {
    try {
        const url = `${process.env.REACT_APP_baseAPI}/${id}?api_key=${process.env.REACT_APP_APIKEY}`;
        const {
            data: { data },
        } = await Axios.get(url, { cancelToken: source.token });
        return { isError: false, data };
    } catch (error) {
        return destructureErrorObject(error);
    }
};

export default fetchGifDetails;
