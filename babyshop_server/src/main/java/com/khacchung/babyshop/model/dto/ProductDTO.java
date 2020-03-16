package com.khacchung.babyshop.model.dto;

import java.util.List;

public class ProductDTO {
    private int id;
    private String name;
    private long price = 0;
    private String description = "";
    private int discount = 0;
    private String imagePath = "";
    private boolean hot = false;
    private boolean color = false;
    private String colorValue = "";
    private boolean size = false;
    private String sizeValue = "";

    private List<Integer> listCatalogsId;

    public ProductDTO() {
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
        return hot;
    }

    public void setHot(boolean hot) {
        this.hot = hot;
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

    public List<Integer> getListCatalogsId() {
        return listCatalogsId;
    }

    public void setListCatalogsId(List<Integer> listCatalogsId) {
        this.listCatalogsId = listCatalogsId;
    }
}
