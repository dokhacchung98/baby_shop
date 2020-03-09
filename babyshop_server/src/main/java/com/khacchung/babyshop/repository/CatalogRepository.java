package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Catalog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogRepository extends CrudRepository<Catalog, Integer> {
    @Query("SELECT e FROM Catalog e")
    Page<Catalog> findCatalogs(Pageable pageable);
}
