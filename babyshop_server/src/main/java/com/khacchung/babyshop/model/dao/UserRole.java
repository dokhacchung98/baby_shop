package com.khacchung.babyshop.model.dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "`user_role`")
@JsonIgnoreProperties(value = {"user"})
public class UserRole {
    @ManyToOne
    @JoinColumn(name = "id_role", insertable = false, updatable = false)
    private Role role;
    @ManyToOne
    @JoinColumn(name = "id_user", insertable = false, updatable = false)
    private User user;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "create_at")
    private Date createAt = new Date();

    @Column(name = "update_at")
    private Date updateAt = new Date();

    @Column(name = "create_by")
    private Integer createBy = 0;


    @Column(name = "id_role")
    private int idRole;

    public void setCreateBy(Integer createBy) {
        this.createBy = createBy;
    }

    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    @Column(name = "id_user")
    private int idUser;

    public UserRole() {
        createAt = new Date();
        updateAt = new Date();
        createBy = 0;
    }

    public UserRole(Role role, User user, int id, Date createAt, Date updateAt, int createBy) {
        this.role = role;
        this.user = user;
        this.id = id;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.createBy = createBy;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
    }

    public Integer getCreateBy() {
        return createBy;
    }

    public void setCreateBy(int createBy) {
        this.createBy = createBy;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
