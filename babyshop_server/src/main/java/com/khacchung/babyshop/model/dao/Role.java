package com.khacchung.babyshop.model.dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "`role`")
@JsonIgnoreProperties(value = {"listUser"})
public class Role {
    @Id
    @Column(name = "id")
    private int id;
    @OneToMany(mappedBy = "role")
    private Collection<User> listUser;
    @Column(name = "name")
    private String name;

    public Role() {
    }

    public Role(int id, String name) {
        this.id = id;
        this.name = name;
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

    public Collection<User> getListUser() {
        return listUser;
    }

    public void setListUser(Collection<User> listUser) {
        this.listUser = listUser;
    }
}
