import React from "react";
import LeftPane from "../left-pane/LeftPane";
import TopPane from "../top-pane/TopPane";
import { Outlet }  from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={styles.LayoutWrapper}>
            <LeftPane />
            <div className={styles.RightSide}>
                <TopPane />
                <div className={styles.Container}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout