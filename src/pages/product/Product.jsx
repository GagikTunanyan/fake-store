import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, deleteProduct, updateProduct } from "../../redux/actions/product";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import "./Product.scss";

const Product = () => {
    const { id } = useParams();
    const history = useNavigate();
    const dispatch = useDispatch();
    const { isRequest, data, error } = useSelector(state => state.product);
    const { image, title, description, category, rating, price } = data
    const [editToggle, setEditToggle] = useState(false);
    const [editData, setEditData] = useState({
        image,
        title,
        description, 
        category, 
        price
    });

    useEffect(() => {
        setEditData(data)
    }, [data])

    const handleBackRoute = () => {
        return history(-1)
    };

    useEffect(() => {
        dispatch(getProduct(id));
    }, [id, dispatch]);
    
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(id, history))
    };

    const handleEdit = () => {
        if(!editToggle) setEditToggle(true);
        else {
            dispatch(updateProduct(id, editData))
            setEditToggle(false);
        }
    }

    const handleOnChange = (event) => {
        const copyData = { ...editData, [event.target.name]: event.target.value };
        setEditData(copyData);
    }

    return (
        <div className="product-page">
            <div className="product-container">
                <div className="navigate-pane">
                    <button onClick={handleBackRoute}>
                        <IoArrowBackSharp />
                        Go Back
                    </button>
                    {(!isRequest && !error) && (
                        <div className="actions-group">
                            <button onClick={handleEdit}>{!editToggle ? <AiTwotoneEdit/> : <FcCheckmark/>}</button>
                            <button onClick={handleDeleteProduct}><AiFillDelete/></button>
                        </div>
                    )}
                </div>
                <div className="container">
                    <div className={`img-block ${isRequest ? "loading" : ""}`}>
                        {(!isRequest && !error) && <img src={image} alt={title} />}
                    </div>
                    <div className="desc-block">
                        {!editToggle && <h2 className={`title ${isRequest ? "loading" : ""}`}>{editData.title}</h2>}
                        {!!editToggle && <input name="title" value={editData.title} onChange={handleOnChange} />}
                        <div className={`description-block ${isRequest ? "loading" : ""}`}>
                            {(!isRequest && !error) && <p className="label">Description</p>}
                            {(!isRequest && !error && !editToggle) && <p className="product-description">{editData.description}</p>}
                            {(!isRequest && !error && !!editToggle) && <input name="description" value={editData.description} onChange={handleOnChange} />}
                        </div>
                        <div className={`labels ${isRequest ? "loading" : ""}`}>
                            {(!isRequest && !error) && <div>{category ? `Category: ${category}`: ""}</div>}
                            {(!isRequest && !error) && <div>{rating ? `Rate: ${rating.rate}`: ""}</div>}
                        </div>
                        {!!price && (
                            !editToggle && <div className="price">{editData.price} $</div>
                        )}
                        {!!price && (
                            !!editToggle && <input name="price" value={editData.price} onChange={handleOnChange} type="number" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;
