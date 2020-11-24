package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Permission;
import com.khacchung.babyshop.model.dao.Role;
import com.khacchung.babyshop.model.dao.RolePermission;
import com.khacchung.babyshop.model.dao.UserRole;
import com.khacchung.babyshop.model.dto.CreatePerDTO;

import java.util.List;

public interface PermissionService {
    Permission addPermission(CreatePerDTO createPerDTO);

    RolePermission togglePer(int role, int per);
}
