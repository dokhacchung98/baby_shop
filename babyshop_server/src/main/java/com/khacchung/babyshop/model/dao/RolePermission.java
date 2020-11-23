package com.khacchung.babyshop.model.dao;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "`role_permission`")
public class RolePermission {
    @ManyToOne
    @JoinColumn(name = "id_role", insertable = false, updatable = false)
    private Role role;
    @ManyToOne
    @JoinColumn(name = "id_permission", insertable = false, updatable = false)
    private Permission permission;

    @Column(name = "id_role")
    private int idRole;
    @Column(name = "id_permission")
    private int idPermission;
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

    public RolePermission() {
        createAt = new Date();
        updateAt = new Date();
        createBy = 0;
    }

    public RolePermission(Role role, Permission permission, int id, Date createAt, Date updateAt, int createBy) {
        this.role = role;
        this.permission = permission;
        this.id = id;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.createBy = createBy;
    }

    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }

    public int getIdPermission() {
        return idPermission;
    }

    public void setIdPermission(int idPermission) {
        this.idPermission = idPermission;
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

    public void setCreateBy(Integer createBy) {
        this.createBy = createBy;
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

    public Permission getPermission() {
        return permission;
    }

    public void setPermission(Permission permission) {
        this.permission = permission;
    }
}
