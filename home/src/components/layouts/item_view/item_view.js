import React, { Component } from 'react'
import './item_view.css';
import Marquee from 'react-text-marquee';
import { convertMoneyDisplay } from './../../../utilities/convert_money'
import { to_slug } from './../../../utilities/slug';

export default class ItemView extends Component {
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
            <div className="category" style={{ border: '1px solid #edf2f5', background: '#fff' }}>
                <div className="ht__cat__thumb">
                    <a href={this.getLinkProduct(this.props.valueData.name, this.props.valueData.id)}>
                        <img src={this.props.valueData.imagePath} style={{ width: '290px', height: '385px', objectFit: 'contain', padding: '4px' }} alt={this.props.valueData.name} />
                    </a>
                </div>
                <div className="fr__hover__info">
                    <ul className="product__action">
                        <li><a href="wishlist.html"><i className="icon-heart icons" /></a></li>
                        <li><a href="cart.html"><i className="icon-handbag icons" /></a></li>
                        <li><a href="#"><i className="icon-shuffle icons" /></a></li>
                    </ul>
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

                <div className="fr__product__inner" id="name-product">
                    <a href={this.getLinkProduct(this.props.valueData.name, this.props.valueData.id)} style={{ paddingLeft: '14px', paddingRight: '14px', display: 'block' }}>
                        <Marquee text={this.props.valueData.name} hoverToStop={true} loop={true} />
                    </a>
                    {
                        this.props.valueData.discount !== 0
                            ?
                            <ul className="fr__pro__prize">
                                <li className="old__prize" style={{ textDecoration: 'line-through' }}>
                                    {this.convertMoney(this.props.valueData.price, 0)} VND
                        </li>
                                <li>
                                    {this.convertMoney(this.props.valueData.price, this.props.valueData.discount)} VND
                            </li>
                            </ul>
                            :
                            <ul className="fr__pro__prize">
                                <li>
                                    {this.convertMoney(this.props.valueData.price, 0)} VND
                            </li>
                            </ul>
                    }

                </div>
            </div>
        )
    }
}
