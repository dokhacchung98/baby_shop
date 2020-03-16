package com.khacchung.babyshop.model.dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "`product`")
@JsonIgnoreProperties(value = {"carts"})
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private long price;
    @Column(name = "description")
    private String description;
    @Column(name = "discount")
    private int discount;
    @Column(name = "image_path")
    private String imagePath;
    @Column(name = "is_hot")
    private boolean isHot;
    @Column(name = "is_color")
    private boolean isColor;
    @Column(name = "color")
    private String colorValue;
    @Column(name = "is_size")
    private boolean isSize;
    @Column(name = "size")
    private String sizeValue;

    @OneToMany(mappedBy = "product")
    private Collection<Cart> carts;

    @ManyToMany(targetEntity = Catalog.class, cascade = {CascadeType.ALL})
    @JoinTable(name = "product_catalog",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "catalog_id"))
    private Collection<Catalog> catalogs;

    public Product() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public boolean isHot() {
        return isHot;
    }

    public void setHot(boolean hot) {
        isHot = hot;
    }

    public boolean isColor() {
        return isColor;
    }

    public void setColor(boolean color) {
        isColor = color;
    }

    public String getColorValue() {
        return colorValue;
    }

    public void setColorValue(String colorValue) {
        this.colorValue = colorValue;
    }

    public boolean isSize() {
        return isSize;
    }

    public void setSize(boolean size) {
        isSize = size;
    }

    public String getSizeValue() {
        return sizeValue;
    }

    public void setSizeValue(String sizeValue) {
        this.sizeValue = sizeValue;
    }

    public Collection<Cart> getCarts() {
        return carts;
    }

    public void setCarts(Collection<Cart> carts) {
        this.carts = carts;
    }

    public Collection<Catalog> getCatalogs() {
        return catalogs;
    }

    public void setCatalogs(Collection<Catalog> catalogs) {
        this.catalogs = catalogs;
    }
}
