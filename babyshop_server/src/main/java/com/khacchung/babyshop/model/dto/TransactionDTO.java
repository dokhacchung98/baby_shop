package com.khacchung.babyshop.model.dto;

import java.util.Date;
import java.util.List;

public class TransactionDTO {
    private int id;
    private Date createdDate;
    private int status;
    private int userId;

    private List<Integer> listCartId;

    public TransactionDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getStatus() {
        return status;
    }

    public List<Integer> getListCartId() {
        return listCartId;
    }

    public void setListCartId(List<Integer> listCartId) {
        this.listCartId = listCartId;
    }
}
