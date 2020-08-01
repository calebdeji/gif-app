import React from "react";
import styles from "./gifgrid.module.scss";
const GifGrid = ({ children }) => {
    return <div className={styles.gridContainer}>{children}</div>;
};

export default GifGrid;
