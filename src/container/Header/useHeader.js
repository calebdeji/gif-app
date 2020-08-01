const { useState } = require("react");
const { useHistory } = require("react-router-dom");

const useHeader = ({ triggerSearch, valueFromRedux }) => {
    const [searchValue, setsearchValue] = useState(valueFromRedux);
    const { push } = useHistory();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        triggerSearch(searchValue, true);
        push("/");
    };
    const handleChange = ({ target: { value } }) => {
        setsearchValue(value);
    };
    return { handleFormSubmit, searchValue, handleChange };
};

export default useHeader;
