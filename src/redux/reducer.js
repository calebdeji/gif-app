import { HOME_DATA, TRIGGER_SEARCH_STATE, UPDATE_SEARCH_VALUE } from "./action";
const initialState = {
    [HOME_DATA]: [],
    [TRIGGER_SEARCH_STATE]: false,
    [UPDATE_SEARCH_VALUE]: "",
};

const reducer = (state = initialState, action) => {
    const { type, value } = action;
    switch (type) {
        case HOME_DATA:
            return { ...state, [HOME_DATA]: value };

        case TRIGGER_SEARCH_STATE:
            return {
                ...state,
                [TRIGGER_SEARCH_STATE]: value.status,
                [UPDATE_SEARCH_VALUE]: value.searchValue,
            };

        default:
            return { ...state };
    }
};

export default reducer;
