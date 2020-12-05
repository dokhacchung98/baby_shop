package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.model.auth.CustomUserDetail;
import com.khacchung.babyshop.model.dao.Permission;
import com.khacchung.babyshop.repository.PermissionRepository;
import com.khacchung.babyshop.repository.RolePermissionRepository;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;
import java.util.stream.Collectors;

public class CheckPermission {
    private static CheckPermission instance;

    private PermissionRepository permissionRepository;

    private RolePermissionRepository rolePermissionRepository;

    public CheckPermission(PermissionRepository permissionRepository,
                           RolePermissionRepository rolePermissionRepository) {
        this.permissionRepository = permissionRepository;
        this.rolePermissionRepository = rolePermissionRepository;
    }

    public static CheckPermission getInstance(PermissionRepository permissionRepository,
                                              RolePermissionRepository rolePermissionRepository) {
        if (instance == null) {
            instance = new CheckPermission(permissionRepository, rolePermissionRepository);
        }
        return instance;
    }

    public static boolean havePermission(PermissionRepository permissionRepository,
                                         RolePermissionRepository rolePermissionRepository,
                                         String path,
                                         String per) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
            try {
                if (permissionRepository == null) {
                    return false;
                }
                List<Permission> listPer = permissionRepository.getListType(per);
                List<Permission> listPerMatch = listPer.stream().filter(t -> t.getModulePer().getPath().equals(path.trim())).collect(Collectors.toList());
                if (listPerMatch.size() > 0) {
                    for (var itemPer :
                            listPerMatch) {
                        for (var itemRole : userDetails.getUser().getUserRoles()) {
                            var tmp = rolePermissionRepository.getItem(itemRole.getIdRole(), itemPer.getId());
                            if (tmp != null) {
                                return true;
                            }
                        }
                    }
                }
            } catch (Exception e) {
                return false;
            }
        }
        return false;
    }

    public boolean isAdmin() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
            try {
                var listRole = userDetails.getUser().getUserRoles();
                for (var item : listRole) {
                    if (item.getRole().getName().equals("ROLE_ADMIN")) {
                        return true;
                    }
                }
            } catch (Exception e) {
                return false;
            }
        }
        return false;
    }
}
