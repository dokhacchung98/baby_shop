package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Catalog;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CatalogService {
    Catalog createCatalog(Catalog catalog);

    Page<Catalog> getCatalogs(Pageable pageable);

    Catalog deleteCatalog(int catalogId);

    Catalog updateCatalog(Catalog catalog);
}
