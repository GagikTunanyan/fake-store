import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.scss";


const Cart = (props) => {
    const { className, image, title, description, price, id } = props;
    const history = useNavigate();

    const handleClick = useCallback((id) => {
        return () => {
            history(`/product/${id}`)
        }
    }, [history]);

    return (
        <div
            onClick={handleClick(id)}
            className={`${styles.CartWrapper} ${className}`}
        >
            <div className={styles.ImageBlock}>
                <img alt={title} src={image} />
            </div>
            <div className={styles.titleBlock}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className={styles.priceBlock}>
                <h3>{price} $</h3>
            </div>
        </div>
    );
};

Cart.propTypes = {
    className: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
    }),
    title: PropTypes.string.isRequired
}

Cart.defaultProps = {
    className: "",
}

export default Cart