import React from "react";
import styles from "./gifdetails.module.scss";
import useGifDetails from "./useGifDetails";
import { ReactComponent as GoBackIcon } from "./images/Goback.svg";
import SkeletonLoader from "../../component/SkeletonLoader/SkeletonLoader";
const GifDetails = () => {
    const { isError, isFetching, dataFetched, handleGoBack } = useGifDetails();
    return (
        <main className={styles.main}>
            {isFetching ? (
                <SkeletonLoader />
            ) : isError ? (
                <p> Error encountered</p>
            ) : (
                <>
                    {" "}
                    <button className={styles.gobackIcon} onClick={handleGoBack}>
                        <GoBackIcon />{" "}
                    </button>{" "}
                    <div className={styles.details}>
                        <img
                            src={dataFetched.images.downsized_large.url}
                            alt={dataFetched.title}
                            className={styles.gif}
                        />
                        <div className={styles.detailsSection}>
                            <h3> Title </h3>
                            <p> {dataFetched.title} </p>
                        </div>
                        <div className={styles.detailsSection}>
                            <h3>Rating</h3>
                            <p> {dataFetched.rating} </p>
                        </div>
                        <div className={styles.detailsSection}>
                            <h3> Source </h3>
                            {dataFetched.source_post_url ? (
                                <a href={dataFetched.source_post_url}> {dataFetched.source_post_url} </a>
                            ) : (
                                "Unavailable source"
                            )}
                        </div>
                        {dataFetched.username && (
                            <div className={styles.detailsSection}>
                                <h3>User Creator Profile</h3>
                                <a href={dataFetched.user.profile_url}> {dataFetched.user.profile_url}</a>
                            </div>
                        )}
                    </div>
                </>
            )}
        </main>
    );
};

export default GifDetails;
