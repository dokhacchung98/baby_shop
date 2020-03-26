import React, { Component } from 'react';
import { to_slug } from './../../../../utilities/slug';
import { connect } from 'react-redux';
import { removeCart, updateCart } from './../../../../state/cart/cart_action';
import { convertMoneyDisplay } from './../../../../utilities/convert_money';

class ItemCart extends Component {
    convertMoney = (price, discount) => {
        const t = convertMoneyDisplay(price, discount);
        return t;
    }

    removeCart = () => {
        this.props.removeItem(this.props.dataValue.id);
    }

    slugPath = () => {
        const strSlug = to_slug(this.props.dataValue.product.name);
        const path = `/san-pham-${strSlug}.${this.props.dataValue.product.id}.`;
        return path;
    }

    updateCart = (number) => {
        if (number !== this.props.dataValue.number && number > 0) {
            this.props.updateCart(this.props.dataValue.id, number);
        }
    }

    render() {
        return (
            <tr>
                <td className="product-thumbnail">
                    <a href={this.slugPath()}>
                        <img src={this.props.dataValue.product.imagePath} alt="product img" style={{ width: '290px', objectFit: 'contain' }} />
                    </a>
                </td>
                <td className="product-name"><a href={this.slugPath()}>{this.props.dataValue.product.name}</a>
                    {
                        this.props.dataValue.product.discount === 0
                            ?
                            <ul className="pro__prize">
                                <li className="old__prize">{this.convertMoney(this.props.dataValue.product.price, 0)}</li>
                            </ul>
                            :
                            <ul className="pro__prize">
                                <li className="old__prize" style={{ textDecoration: 'line-through' }}>{this.convertMoney(this.props.dataValue.product.price, 0)} VND</li>
                                <li>{this.convertMoney(this.props.dataValue.product.price, this.props.dataValue.product.discount)} VND</li>
                            </ul>
                    }

                    <ul className="pro__prize">
                        {this.props.dataValue.size
                            ?
                            < li style={{ marginRight: '16px' }}>Size: {this.props.dataValue.sizeValue}</li>
                            : <li></li>
                        }
                        {this.props.dataValue.color
                            ?
                            < li style={{display: 'flex'}}>Color: <div style={{ width: '24px', height: '24px', backgroundColor: `#${this.props.dataValue.colorValue}`, marginLeft: '8px' }}></div></li>
                            : <li></li>
                        }
                    </ul>
                </td>

                <td className="product-price"><span className="amount">{this.props.dataValue.product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span></td>
                <td className="product-quantity"><input type="number" defaultValue={this.props.dataValue.number} onChange={(e) => {
                    this.updateCart(e.target.value);
                }} /></td>
                <td className="product-subtotal">{this.props.dataValue.priceAfterSale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</td>
                <td className="product-remove"><a href="/#" onClick={(e) => {
                    e.preventDefault();
                    this.removeCart();
                }}><i className="icon-trash icons" /></a></td>
            </tr >
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeItem: (id) => {
            dispatch(removeCart(id))
        },
        updateCart: (id, number) => {
            dispatch(updateCart(id, number))
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemCart);