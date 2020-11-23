package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.UserRole;
import com.khacchung.babyshop.repository.RoleRepository;
import com.khacchung.babyshop.repository.UserRoleRepository;
import com.khacchung.babyshop.service.RoleService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    private static Logger logger = Logger.getLogger(RoleServiceImpl.class);

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Override
    public List<UserRole> getRoleUser(int id) {
        return userRoleRepository.getRoleUser(id);
    }
}
