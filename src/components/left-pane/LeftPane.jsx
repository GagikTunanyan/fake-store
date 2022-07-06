import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categories";
import { Link, useParams } from "react-router-dom";
import styles from "./LeftPane.module.scss";

const LeftPane = () => {
    const { data, isRequest } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const [skeletonLoad] = useState(new Array(5).fill(null));
    const { category } = useParams();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className={styles.LeftPaneWrapper}>
            {!!isRequest && skeletonLoad.map((e,i) => {
                return (
                    <div
                        className={`${styles.CategoryItem} ${styles.skeletonLoad}`}
                        key={i.toString()}
                    />
                )
            })}
            {!isRequest && data.map(({ displayValue, value}) => {
                return (
                    <Link
                        to={`/${value}`}
                        className={`${styles.CategoryItem} ${category === value ? styles.CategoryItemSelected : ""}`}
                        key={value}
                    >
                        {displayValue}
                    </Link>
                )
            })}
        </div>
    )
}

export default LeftPane