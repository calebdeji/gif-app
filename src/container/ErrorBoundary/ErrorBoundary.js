import React from "react";
import styles from "./errorboundary.module.scss";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className={styles.container}>
                    <img
                        src={require("./images/error.gif")}
                        alt="An error oocured"
                        title="An error occured"
                    />
                    <p> Oops, something went wrong. Kindly refresh your browser</p>
                </div>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary;
