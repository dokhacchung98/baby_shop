import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCart } from './../../../../state/cart/cart_action';
import { to_slug } from './../../../../utilities/slug';
import Marquee from 'react-text-marquee';

class ItemCartSearch extends Component {
    removeCart = () => {
        this.props.removeItem(this.props.dataValue.id);
    }

    slugPath = () => {
        const strSlug = to_slug(this.props.dataValue.product.name);
        const path = `/san-pham-${strSlug}.${this.props.dataValue.product.id}.`;
        return path;
    }

    render() {
        return (
            <div className="shp__single__product">
                <div className="shp__pro__thumb">
                    <a href={this.slugPath()}>
                        <img src={this.props.dataValue.product.imagePath} alt="product images" />
                    </a>
                </div>
                <div className="shp__pro__details">
                    <a href={this.slugPath()}><Marquee text={this.props.dataValue.product.name} hoverToStop={true} trailing={3000} loop={true} /></a>
                    <span className="quantity">Số Lượng: {this.props.dataValue.number}</span>
                    <span className="shp__price">{this.props.dataValue.priceAfterSale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span>
                </div>
                <div className="remove__btn">
                    <a href="/#" title="Xóa sản phẩm" onClick={(e)=>{
                        e.preventDefault();
                        this.removeCart();
                    }}><i className="zmdi zmdi-close" /></a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeItem: (id) => {
            dispatch(removeCart(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemCartSearch);