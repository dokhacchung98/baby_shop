package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Product;
import com.khacchung.babyshop.model.dto.FileUploadDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService {
    String uploadImage(FileUploadDTO file);

    Product createProduct(Product product, List<Integer> listCatalogId);

    Page<Product> getProducts(Pageable pageable);

    Product updateProduct(Product product, List<Integer> listCatalogId);

    Product deleteProduct(int productId);

    Product getDetail(int id);

    Page<Product> getProductsByCatalog(Pageable pageable, int idCatalog);

    Page<Product> searchProduct(Pageable pageable, String keyword);
}
