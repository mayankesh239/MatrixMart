import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import MetaData from "../layout/MetaData";
import "./Home.css";
import Product from './ProductCard.js';
import Loader from "../layout/Loader/Loader.js";
import { clearErrors, getProduct } from '../../actions/productAction.js';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'


const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(
        (state) => state.products
    );
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert])
    return (
        <Fragment>
            {loading ? (
                <Loader />
                // "loading..."
            ) : (
                <Fragment>
                    <MetaData title="MatrixMart" />


                    <div className="banner">
                        <p>WELCOME TO MATRIX MART</p>
                        <h1>TIME TO BE SHOPAHOLIC</h1>

                        <a href="#container">
                            <button>
                                LET'S GO <CgMouse />
                            </button>
                        </a>

                    </div>


                    <h2 className="homeHeading">FEATURED PRODUCTS</h2>

                    <div className="container" id="container">
                        {products &&
                            products.map((product) => (
                                <Product product={product} />
                            ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;