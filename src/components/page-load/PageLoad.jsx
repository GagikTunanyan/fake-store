import React from "react";
import PropTypes from "prop-types";
import styles from "./PageLoad.module.scss";

const Load = (props) => {
    const { isLoading } = props;
    return (
        isLoading 
            ? (
                <div className={styles.pageLoad}>
                    Loading
                </div>
            )
            : null
    )
}

Load.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

Load.defaultProps = {
    isLoading: false,
}

export default Load;