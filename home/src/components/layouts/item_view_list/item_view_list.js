import React, { Component } from 'react'

export default class ItemViewList extends Component {
    render() {
        return (
            <div className="ht__list__product">
                <div className="ht__list__thumb">
                    <a href="product-details.html"><img src="images/product-2/pro-1/1.jpg" alt="product images" /></a>
                </div>
                <div className="htc__list__details">
                    <h2><a href="product-details.html" style={{ fontSize: '32px' }}>Product Title Here </a></h2>
                    <ul className="pro__prize" style={{ display: 'block' }}>
                        <li className="old__prize" style={{ textDecoration: 'line-through' }}>$82.5</li>
                        <li style={{ fontSize: '24px', marginTop: '12px' }}>$75.2</li>
                    </ul>
                    <ul className="pro__prize">
                        <li style={{ width: '50px', height: '50px', backgroundColor: '#c7c7c7', lineHeight: '50px', textAlign: 'center', marginRight: '14px' }}><a href="wishlist.html"><i className="icon-heart icons" /></a></li>
                        <li style={{ width: '50px', height: '50px', backgroundColor: '#c7c7c7', lineHeight: '50px', textAlign: 'center', marginRight: '14px' }}><a href="#"><i className="icon-shuffle icons" /></a></li>
                    </ul>
                    <div className="fr__list__btn">
                        <a className="fr__btn" href="cart.html">Thêm Vào Giỏ Hàng</a>
                    </div>
                </div>
            </div>
        )
    }
}
