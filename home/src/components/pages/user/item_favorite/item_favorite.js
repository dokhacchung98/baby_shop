import React, { Component } from 'react';
import { to_slug } from './../../../../utilities/slug';
import { convertMoneyDisplay } from './../../../../utilities/convert_money';
import { removeFavorite } from './../../../../state/favorite/favorite_action';
import { connect } from 'react-redux';

class ItemFavorite extends Component {
    getLinkProduct = () => {
        const strSlug = to_slug(this.props.dataValue.product.name);
        const path = `/san-pham-${strSlug}.${this.props.dataValue.product.id}.`;
        return path;
    }

    removeItem = () => {
        this.props.removeFavorite(this.props.dataValue.id);
    }

    render() {
        return (
            <tr>
                <td className="product-thumbnail">
                    <a href={this.getLinkProduct()}>
                        <img src={this.props.dataValue.product.imagePath} alt={this.props.dataValue.product.name} style={{width: '150px', objectFit: 'contain'}}/>
                    </a>
                </td>
                <td className="product-name">
                    <a href={this.getLinkProduct()}>{this.props.dataValue.product.name}</a>
                </td>
                <td className="product-price">
                    <span className="amount" style={{fontWeight: '400'}}>{convertMoneyDisplay(this.props.dataValue.product.price, 0)} VND</span>
                </td>
                <td className="product-subtotal">
                    {convertMoneyDisplay(this.props.dataValue.product.price, this.props.dataValue.product.discount)} VND
                </td>
                <td className="product-remove">
                    <a href="/#" onClick={(e) => {
                        e.preventDefault();
                        this.removeItem();
                    }}><i className="icon-trash icons" /></a>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeFavorite: (id) => {
            dispatch(removeFavorite(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemFavorite);
