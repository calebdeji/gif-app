import React from "react";
import styles from "./skeletonLoader.module.scss";
const SkeletonLoader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imagePlaceholder}></div>
            {[1, 2, 3].map((element) => {
                return <div key={element} className={styles.descriptionHolder}></div>;
            })}
            <div className={styles.animationHolder}></div>
        </div>
    );
};

export default SkeletonLoader;
