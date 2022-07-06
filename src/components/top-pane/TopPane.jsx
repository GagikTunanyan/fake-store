import React, { useState, useRef, useEffect } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { createPortal } from 'react-dom';
import { RiAddFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/product"
import styles from "./TopPane.module.scss";

function ReactPortal({ children }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"
        }
    }, []);
    return createPortal(<portal className={styles.Portal}>{children}</portal>, document.querySelector("#root"));
}

const TopPane = () => {
    const dispatch = useDispatch();
    const portalRef = useRef();
    const [modalToggle, setModalToggle] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        image: "",
        price: 0

    });

    const handleCreatorclick = () => {
        setModalToggle(true);
        
    }

    const handleOnChange = (event) => {
        const copyData = { ...formData, [event.target.name]: event.target.value };
        setFormData(copyData);
    };

    const handleAddedProduct = () => {
        dispatch(addProduct(formData));
        setModalToggle(false);
        setFormData({
            title: "",
            description: "",
            category: "",
            image: "",
            price: 0
        });
    }

    useOutsideClick(portalRef, () => setModalToggle(false))
    return (
        <div className={styles.TopPane}>
            <div className={styles.creator}>
                <button onClick={handleCreatorclick}><RiAddFill /></button>
            </div>
            {!!modalToggle && (
                <ReactPortal>
                    <div className={styles.portalOverlay} ref={portalRef}>
                        <input placeholder="Title" name="title" value={formData.title} onChange={handleOnChange} />
                        <input placeholder="Description" name="description" value={formData.description} onChange={handleOnChange} />
                        <input placeholder="ImageURL" name="image" value={formData.image} onChange={handleOnChange} />
                        <input placeholder="Category" name="category" value={formData.category} onChange={handleOnChange} />
                        <input placeholder="Price" name="price" value={formData.price} type="number" onChange={handleOnChange} />
                        <button onClick={handleAddedProduct}>Add</button>
                    </div>
                </ReactPortal>
            )}
        </div>
    )
};

export default TopPane