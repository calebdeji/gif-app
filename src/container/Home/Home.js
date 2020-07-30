import React from "react";
import styles from "./home.module.scss";
import GifGrid from "../../component/GifGrid/GifGrid";
import SkeletonLoader from "../../component/SkeletonLoader/SkeletonLoader";
import { connect } from "react-redux";
import saveHomeState from "../../redux/action";

const Home = () => {
    const isFetching = true;
    const isError = true;
    return (
        <main className={styles.main}>
            {isFetching ? (
                <GifGrid>
                    {" "}
                    {[1, 2, 3].map((element) => (
                        <SkeletonLoader key={element} />
                    ))}
                </GifGrid>
            ) : isError ? (
                <p>error</p>
            ) : (
                <GifGrid></GifGrid>
            )}
        </main>
    );
};

const mapStateToProps = (state) => {
    return { homeState: state };
};
const mapActionToProps = {
    saveHomeState,
};

export default connect(mapStateToProps, mapActionToProps)(Home);
