import React, { Component } from 'react'

export default class ItemBlog extends Component {
    render() {
        return (
            <div className="blog">
                <div className="blog__thumb">
                    <a href="blog-details.html">
                        <img src="images/blog/blog-img/1.jpg" alt="blog images" />
                    </a>
                </div>
                <div className="blog__details">
                    <div className="bl__date">
                        <span>March 22, 2016</span>
                    </div>
                    <h2><a href="blog-details.html">Lorem ipsum dolor sit amet, consec tetur adipisicing elit</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="blog__btn">
                        <a href="blog-details.html">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
