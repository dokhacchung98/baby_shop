package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.dao.ModulePer;
import com.khacchung.babyshop.model.dao.Permission;
import com.khacchung.babyshop.model.dao.Role;
import com.khacchung.babyshop.model.dao.RolePermission;
import com.khacchung.babyshop.model.dto.CreatePerDTO;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.service.ModulPerService;
import com.khacchung.babyshop.service.PermissionService;
import com.khacchung.babyshop.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PermissionController {
    @Autowired
    private ModulPerService modulPerService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PermissionService permissionService;

    @RequestMapping(value = "/admin/get-module-permission", method = RequestMethod.GET)
    public ResponeDataDTO<List<ModulePer>> getAllModulePermission() {
        try {
            var tmp = modulPerService.getAll();
            return new ResponeDataDTO.Builder<List<ModulePer>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(tmp)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/get-role-admin", method = RequestMethod.GET)
    public ResponeDataDTO<List<Role>> getAllRoleAdmin() {
        try {
            var tmp = roleService.getListRoleAdmin();
            return new ResponeDataDTO.Builder<List<Role>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(tmp)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/toggle-permission", method = RequestMethod.GET)
    public ResponeDataDTO<RolePermission> togglePermission(@Param("role") int role, @Param("per") int per) {
        try {
            var tmp = permissionService.togglePer(role, per);
            return new ResponeDataDTO.Builder<RolePermission>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(tmp)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/create-per", method = RequestMethod.POST)
    public ResponeDataDTO<Permission> togglePermission(@Valid @RequestBody CreatePerDTO createPerDTO) {
        try {
            var tmp = permissionService.addPermission(createPerDTO);
            return new ResponeDataDTO.Builder<Permission>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(tmp)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }
}
