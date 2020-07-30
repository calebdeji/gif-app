export const HOME_STATE = "home";

const saveHomeState = (fetchedData) => {
    return { type: HOME_STATE, apiObjectResponse: fetchedData };
};

export default saveHomeState;
