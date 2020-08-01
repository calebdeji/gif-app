import React from "react";
import styles from "./home.module.scss";
import GifGrid from "../../component/GifGrid/GifGrid";
import SkeletonLoader from "../../component/SkeletonLoader/SkeletonLoader";
import { connect } from "react-redux";
import saveHomeState, { HOME_DATA } from "../../redux/action";
import useHome from "./useHome";
import { Link } from "react-router-dom";

const Home = ({ homeState, saveHomeState }) => {
    const { isFetching, isError } = useHome({ homeState, saveHomeState });
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
                <GifGrid>
                    {homeState[HOME_DATA].length === 0 ? (
                        <p>EMpty collections</p>
                    ) : (
                        homeState[HOME_DATA].map(({ id, title, images }) => {
                            const { downsized_large } = images;
                            return (
                                <Link to={`/${id}`} key={id} className={styles.gifLink}>
                                    <img src={downsized_large.url} alt={title} />
                                    <span>{title}</span>
                                </Link>
                            );
                        })
                    )}
                </GifGrid>
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
