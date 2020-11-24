package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Permission;
import com.khacchung.babyshop.model.dao.RolePermission;
import com.khacchung.babyshop.model.dto.CreatePerDTO;
import com.khacchung.babyshop.repository.PermissionRepository;
import com.khacchung.babyshop.repository.RolePermissionRepository;
import com.khacchung.babyshop.service.PermissionService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PermissionServiceImpl implements PermissionService {
    private static Logger logger = Logger.getLogger(PermissionServiceImpl.class);

    @Autowired
    private PermissionRepository permissionRepository;

    @Autowired
    private RolePermissionRepository rolePermissionRepository;

    @Override
    public Permission addPermission(CreatePerDTO createPerDTO) {
        try {
            var p = new Permission();
            p.setIdModulePer(createPerDTO.getIdModule());
            p.setName(createPerDTO.getName());
            p.setType(createPerDTO.getType());
            var tmp = permissionRepository.save(p);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public RolePermission togglePer(int role, int per) {
        try {
            var tmp = rolePermissionRepository.getItem(role, per);
            if (tmp != null) {
                rolePermissionRepository.delete(tmp);
            } else {
                var tt = new RolePermission();
                tt.setIdPermission(per);
                tt.setIdRole(role);
                tmp = rolePermissionRepository.save(tt);
            }
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
