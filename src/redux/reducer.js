/**
 *
 * @param { {} } state
 * @param { {  } } action
 */
const reducer = (state, action) => {
    const { type, value } = action;
    return { ...state, ...value };
};

export default reducer;
