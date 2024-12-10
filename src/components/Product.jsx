import {React} from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';


const Product = () => {
    
    const cardItem = (item) => {
        return (
            <div className="card product-card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                <NavLink className="card-img-wrapper" to={`/products/${item.id}`} >
                    <img src={item.img} className="card-img-top main-img" alt={item.title} />
                    <img src={item.hoverImg} className="card-img-top hover-img" alt={item.title} />
                </NavLink>
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">
                        <span className="current-price">${item.price}</span>{' '}
                        <span className="compare-price text-muted"><del>${item.comparePrice}</del></span>
                    </p>
                    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
                        Buy Now
                    </NavLink>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    );
};

export default Product;
