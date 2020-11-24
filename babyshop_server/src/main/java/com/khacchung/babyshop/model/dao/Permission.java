package com.khacchung.babyshop.model.dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "`permission`")
@JsonIgnoreProperties(value = {"rolePermissions", "modulePer"})
public class Permission {
    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;
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

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "permission")
    @Fetch(value = FetchMode.SUBSELECT)
    private Collection<RolePermission> rolePermissions;

    @ManyToOne
    @JoinColumn(name = "id_module_per", insertable = false, updatable = false)
    private ModulePer modulePer;

    @Column(name = "id_module_per")
    private int idModulePer;

    public Permission() {
        createAt = new Date();
        updateAt = new Date();
        createBy = 0;
    }

    public Permission(String name, int id, Date createAt, Date updateAt, int createBy, Collection<RolePermission> rolePermissions) {
        this.name = name;
        this.id = id;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.createBy = createBy;
        this.rolePermissions = rolePermissions;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<RolePermission> getRolePermissions() {
        return rolePermissions;
    }

    public void setRolePermissions(Collection<RolePermission> rolePermissions) {
        this.rolePermissions = rolePermissions;
    }

    public void setCreateBy(Integer createBy) {
        this.createBy = createBy;
    }

    public ModulePer getModulePer() {
        return modulePer;
    }

    public void setModulePer(ModulePer modulePer) {
        this.modulePer = modulePer;
    }

    public int getIdModulePer() {
        return idModulePer;
    }

    public void setIdModulePer(int idModulePer) {
        this.idModulePer = idModulePer;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
