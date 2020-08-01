import React from "react";
import styles from "./header.module.scss";
import { ReactComponent as SearchIcon } from "./images/search.svg";
import { UPDATE_SEARCH_VALUE, triggerSearch, updateSearchValue } from "../../redux/action";
import { connect } from "react-redux";
import useHeader from "./useHeader";
const Header = (props) => {
    const { handleChange, handleFormSubmit, searchValue } = useHeader(props);
    return (
        <header className={styles.container}>
            <h3 className={styles.title}> Gif App</h3>
            <form className={styles.formSearch} onSubmit={handleFormSubmit}>
                <input
                    type="search"
                    name="search gif"
                    id="search_gif"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search for gif..."
                />
                <button type="submit">
                    <SearchIcon className={styles.searchIcon} />
                </button>
            </form>
        </header>
    );
};
const mapStateToProps = (state) => {
    return { valueFromRedux: state[UPDATE_SEARCH_VALUE] };
};
const mapActionToProps = {
    triggerSearch,
};

export default connect(mapStateToProps, mapActionToProps)(Header);
