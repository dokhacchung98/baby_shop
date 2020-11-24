package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.ModulePer;
import com.khacchung.babyshop.repository.ModulePerRepository;
import com.khacchung.babyshop.service.ModulPerService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModulePermissionServiceImpl implements ModulPerService {
    private static Logger logger = Logger.getLogger(ModulePermissionServiceImpl.class);

    @Autowired
    private ModulePerRepository modulePerRepository;


    @Override
    public List<ModulePer> getAll() {
        try {
            var tmp = modulePerRepository.getAll();
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
