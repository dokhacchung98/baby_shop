import React, { Component } from 'react'

export default class ItemView extends Component {
    render() {
        return (
            <div className="category">
                <div className="ht__cat__thumb">
                    <a href="product-details.html">
                        <img src="images/product/1.jpg" alt="product images" />
                    </a>
                </div>
                <div className="fr__hover__info">
                    <ul className="product__action">
                        <li><a href="wishlist.html"><i className="icon-heart icons" /></a></li>
                        <li><a href="cart.html"><i className="icon-handbag icons" /></a></li>
                        <li><a href="#"><i className="icon-shuffle icons" /></a></li>
                    </ul>
                </div>
                <div className="fr__product__inner">
                    <h4><a href="product-details.html">Largest Water Pot</a></h4>
                    <ul className="fr__pro__prize">
                        <li className="old__prize">$30.3</li>
                        <li>$25.9</li>
                    </ul>
                </div>
            </div>
        )
    }
}
