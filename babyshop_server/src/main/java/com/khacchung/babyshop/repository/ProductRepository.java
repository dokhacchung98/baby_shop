package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
    @Query(value = "SELECT e FROM Product e")
    Page<Product> findProduct(Pageable pageable);
}
