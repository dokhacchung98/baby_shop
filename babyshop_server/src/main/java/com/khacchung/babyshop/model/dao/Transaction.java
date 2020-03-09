package com.khacchung.babyshop.model.dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "`transaction`")
@JsonIgnoreProperties(value = {"carts"})
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "created_date")
    private Date createdDate;
    @Column(name = "status")
    private boolean status;
    @Column(name = "user_id")
    private int userId;

    @OneToMany(mappedBy = "transaction")
    private Collection<Cart> carts;

    public Transaction() {
    }

    public Transaction(int id, Date createdDate, boolean status, int userId) {
        this.id = id;
        this.createdDate = createdDate;
        this.status = status;
        this.userId = userId;
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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
