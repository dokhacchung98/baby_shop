import React, { Component } from 'react';
import { to_slug } from './../../../../utilities/slug';

export default class ItemOrder extends Component {
    renderPath = () => {
        const strSlug = to_slug(this.props.dataValue.product.name);
        const path = `/san-pham-${strSlug}.${this.props.dataValue.product.id}.`;
        return path;
    }


    render() {
        return (
            <tr>
                <td className="product-thumbnail"><a href={this.renderPath()}>
                    <img style={{ width: '290px', objectFit: 'contain' }} src={this.props.dataValue.product.imagePath} alt={this.props.dataValue.product.name} />
                </a></td>
                <td className="product-name"><a href={this.renderPath()}>{this.props.dataValue.product.name}</a></td>
                <td className="product-price"><span className="amount">{this.props.dataValue.priceSale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span></td>
                <td className="product-stock-status"><span className="wishlist-in-stock">{this.props.dataValue.number}</span></td>
                <td className="product-stock-status"><span className="wishlist-in-stock">{this.props.dataValue.priceNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span></td>
            </tr>
        )
    }
}
