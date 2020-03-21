import React, { Component } from 'react'
import { to_slug } from './../../../utilities/slug';
import './item_blog.css';

export default class ItemBlog extends Component {
    getLinkBlog = (name, id) => {
        const strSlug = to_slug(name);
        const path = `/bai-viet-${strSlug}.${id}.`;
        return path;
    }

    render() {
        return (
            <div className="blog">
                <div className="blog__thumb">
                    <a href={this.getLinkBlog(this.props.dataValue.title, this.props.dataValue.id)}>
                        <img src={this.props.dataValue.imagePath} alt={this.props.dataValue.title} style={{ width: '400px', height: '287px', objectFit: 'cover' }} />
                    </a>
                </div>
                <div className="blog__details">
                    <div className="bl__date">
                        <span>{new Date(this.props.dataValue.createdDate).toLocaleString().replace("00:00:00, ", "")}</span>
                    </div>
                    <h2><a href={this.getLinkBlog(this.props.dataValue.title, this.props.dataValue.id)}>{this.props.dataValue.title}</a></h2>
                    <p>{this.props.dataValue.shortDescription.substring(0, 120) + "..."}</p>
                    <div className="blog__btn">
                        <a href={this.getLinkBlog(this.props.dataValue.title, this.props.dataValue.id)}>Đọc Thêm</a>
                    </div>
                </div>
            </div>
        )
    }
}
