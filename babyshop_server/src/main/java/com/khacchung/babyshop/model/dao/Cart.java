package com.khacchung.babyshop.model.dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "`cart`")
@JsonIgnoreProperties(value = {"user"})
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "is_size")
    private boolean size;
    @Column(name = "size")
    private String sizeValue;
    @Column(name = "is_color")
    private boolean color;
    @Column(name = "color")
    private String colorValue;
    @Column(name = "number")
    private int number;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "product_id")
    private int productId;

    @ManyToOne
    @JoinColumn(name = "product_id", insertable = false, updatable = false)
    private Product product;
    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    public Cart() {
        this.number = 1;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isSize() {
        return size;
    }

    public void setSize(boolean size) {
        this.size = size;
    }

    public String getSizeValue() {
        return sizeValue;
    }

    public void setSizeValue(String sizeValue) {
        this.sizeValue = sizeValue;
    }

    public boolean isColor() {
        return color;
    }

    public void setColor(boolean color) {
        this.color = color;
    }

    public String getColorValue() {
        return colorValue;
    }

    public void setColorValue(String colorValue) {
        this.colorValue = colorValue;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getPriceBeforeSale() {
        if (this.product != null)
            return this.product.getPrice() * this.number;
        return 0;
    }

    public long getPriceAfterSale() {
        if (this.product != null)
            return ((long) (this.product.getPrice() * (100 - this.product.getDiscount()) / 100000)) * number * 1000;
        return 0;
    }
}
