package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.UserRole;

import java.util.List;

public interface RoleService {
    List<UserRole> getRoleUser(int id);
}
