package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
    @Query(value = "SELECT e FROM Product e")
    Page<Product> findProduct(Pageable pageable);

    @Query(value = "SELECT p FROM Product p JOIN p.catalogs c ON c.id =:idCatalog")
    Page<Product> getProductByCatalog(Pageable pageable, @Param("idCatalog") int idCatalog);

    @Query(value = "SELECT p FROM Product p WHERE p.name LIKE  %:keyword%")
    Page<Product> searchProduct(Pageable pageable, @Param("keyword") String keyword);

    @Query(value = "SELECT p FROM Product p")
    Page<Product> getNewProduct(Pageable pageable);

    @Query(value = "SELECT product.* FROM product, product_catalog where product.id <> :id AND catalog_id = :idCatalog  ORDER BY NEWID()",
            nativeQuery = true)
    Page<Product> randomProduct(Pageable pageable, @Param("id") int id, @Param("idCatalog") int idCatalog);
}
