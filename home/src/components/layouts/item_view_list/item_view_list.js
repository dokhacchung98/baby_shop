import React, { Component } from 'react';
import './item_view_list.css';
import { convertMoneyDisplay } from './../../../utilities/convert_money'
import { to_slug } from './../../../utilities/slug';

export default class ItemViewList extends Component {
    convertMoney = (price, discount) => {
        const t = convertMoneyDisplay(price, discount);
        return t;
    }

    getLinkProduct = (name, id) => {
        const strSlug = to_slug(name);
        const path = `/san-pham-${strSlug}.${id}.`;
        return path;
    }

    render() {
        return (
            <div className="ht__list__product" style={{ border: '1px solid #edf2f5', background: '#fff', position: 'relative' }}>
                <div className="ht__list__thumb">
                    <a href={this.getLinkProduct(this.props.valueData.name, this.props.valueData.id)}><img src={this.props.valueData.imagePath} alt={this.props.valueData.name} style={{ width: '290px', height: '385px', objectFit: 'contain', padding: '4px' }} /></a>
                </div>
                {
                    this.props.valueData.discount === 0
                        ?
                        <div></div>
                        :
                        <div
                            style={{ position: 'absolute', top: '0px', left: '0px', width: '86px', height: '32px', background: '#22a7f5', lineHeight: '32px', textAlign: 'center', color: '#fff' }}>
                            SALE <strong>{this.props.valueData.discount}%</strong>
                        </div>
                }
                <div className="htc__list__details" style={{ padding: '24px' }}>
                    <h2><a href={this.getLinkProduct(this.props.valueData.name, this.props.valueData.id)} style={{ fontSize: '24px' }}>{this.props.valueData.name} </a></h2>
                    {
                        this.props.valueData.discount !== 0
                            ?
                            <ul className="pro__prize" style={{ display: 'block' }}>
                                <li className="old__prize" style={{ textDecoration: 'line-through' }}>{this.props.valueData.price} VND</li>
                                <li style={{ fontSize: '24px', marginTop: '12px' }}>{this.convertMoney(this.props.valueData.price, this.props.valueData.discount)} VND</li>
                            </ul>
                            :
                            <ul className="pro__prize" style={{ display: 'block' }}>
                                <li style={{ fontSize: '24px', marginTop: '12px' }}>
                                    {this.convertMoney(this.props.valueData.price, 0)} VND
                            </li>
                            </ul>
                    }
                    <ul className="pro__prize" id="nm">
                        <li><a href="wishlist.html"><i className="icon-heart icons" /></a></li>
                        <li><a href="#"><i className="icon-shuffle icons" /></a></li>
                    </ul>
                    <div className="fr__list__btn">
                        <a className="fr__btn" href="cart.html">Thêm Vào Giỏ Hàng</a>
                    </div>
                </div>
            </div>
        )
    }
}
