import React from "react";
const GifDetails = () => {
    const isFetching = true;
    const isError = false;
    return (
        <main>{isFetching ? <p> Is Fetchng</p> : isError ? <p> Error encountered</p> : <p> Details</p>}</main>
    );
};

export default GifDetails;
