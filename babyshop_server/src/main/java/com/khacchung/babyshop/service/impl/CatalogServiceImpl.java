package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Catalog;
import com.khacchung.babyshop.repository.CatalogRepository;
import com.khacchung.babyshop.service.CatalogService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

@Service
public class CatalogServiceImpl implements CatalogService {
    private static Logger logger = Logger.getLogger(CatalogServiceImpl.class);

    @Autowired
    private CatalogRepository catalogRepository;

    @Override
    public Catalog createCatalog(Catalog catalog) {
        try {
            Catalog tmp = catalogRepository.save(catalog);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Catalog> getCatalogs(Pageable pageable) {
        try {
            Page<Catalog> list = catalogRepository.findCatalogs(pageable);
            return list;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Catalog deleteCatalog(int catalogId) {
        try {
            Catalog catalog = catalogRepository.findById(catalogId).get();
            catalogRepository.delete(catalog);
            return catalog;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Catalog updateCatalog(Catalog catalog) {
        try {
            Catalog tmp = catalogRepository.save(catalog);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
