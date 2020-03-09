package com.khacchung.babyshop.model.dto;

public class CatalogDTO {
    private int id = 0;
    private String name;

    public CatalogDTO() {
    }

    public CatalogDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
