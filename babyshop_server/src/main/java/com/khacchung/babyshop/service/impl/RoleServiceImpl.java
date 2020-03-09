package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.repository.RoleRepository;
import com.khacchung.babyshop.service.RoleService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {
    private static Logger logger = Logger.getLogger(RoleServiceImpl.class);

    @Autowired
    private RoleRepository roleRepository;
}
