package com.khacchung.babyshop.model.dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "module_per")
@JsonIgnoreProperties(value = {"rolePermissions", "userRoles"})
public class ModulePer {
    @Column(name = "name")
    private String name;

    @Column(name = "path")
    private String path;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "modulePer", cascade = CascadeType.ALL)
    @Fetch(value = FetchMode.SUBSELECT)
    private Collection<Permission> permissions;
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

    public ModulePer() {
        createAt = new Date();
        updateAt = new Date();
        createBy = 0;
    }

    public ModulePer(String name, int id, Date createAt, Date updateAt, int createBy) {
        this.name = name;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCreateBy(Integer createBy) {
        this.createBy = createBy;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Collection<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(Collection<Permission> permissions) {
        this.permissions = permissions;
    }

}
