export const HOME_DATA = "home";
export const TRIGGER_SEARCH_STATE = "search";
export const UPDATE_SEARCH_VALUE = "updateSearch";
const saveHomeState = (fetchedData) => {
    return { type: HOME_DATA, value: fetchedData };
};
export const triggerSearch = (searchValue, status) => {
    return { type: TRIGGER_SEARCH_STATE, value: { searchValue, status } };
};
export const updateSearchValue = (searchValue) => {
    return { type: UPDATE_SEARCH_VALUE, value: searchValue };
};

export default saveHomeState;
