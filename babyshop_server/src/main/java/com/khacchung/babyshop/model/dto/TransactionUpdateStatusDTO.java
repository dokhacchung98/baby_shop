package com.khacchung.babyshop.model.dto;

public class TransactionUpdateStatusDTO {
    private int id;
    private int status;

    public TransactionUpdateStatusDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
