package com.khacchung.babyshop.model.dto;

import com.khacchung.babyshop.model.dao.Blog;
import com.khacchung.babyshop.model.dao.Product;
import org.springframework.data.domain.Page;

public class SearchDTO {
    private Page<Product> listProduct;
    private Page<Blog> listBlog;

    public SearchDTO() {
    }

    public Page<Product> getListProduct() {
        return listProduct;
    }

    public void setListProduct(Page<Product> listProduct) {
        this.listProduct = listProduct;
    }

    public Page<Blog> getListBlog() {
        return listBlog;
    }

    public void setListBlog(Page<Blog> listBlog) {
        this.listBlog = listBlog;
    }
}
