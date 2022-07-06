import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import Load from "../../components/page-load/PageLoad";
import Cart from "../../components/product-cart/Cart";
import "./Home.scss";

const Home = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const { isRequest, data, error } = useSelector((state) => state.products);
    const categories = useSelector(state => state.categories);
    const history = useNavigate();

    useEffect(() => {
        dispatch(getProducts(category))
    }, [dispatch, category]);

    useEffect(() => {
        const findIndex = categories.data.findIndex((elem) => elem.value === category);
        if(!categories.isRequest && findIndex === -1) {
            history("/all")
        }
    }, [category, history, categories]);

    return (
        <div className="home-page">
            <Load isLoading={isRequest} />
            <div className="products-wrapper">
                {(!isRequest && !error) && (
                    data.map((product) => {
                        return (
                            <Cart 
                                { ...product }
                                key={product.id}
                                className="product-cart"
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Home