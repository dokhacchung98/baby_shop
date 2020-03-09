package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Product;
import com.khacchung.babyshop.model.dto.FileUploadDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {
    String uploadImage(FileUploadDTO file);

    Product createProduct(Product product);

    Page<Product> getProducts(Pageable pageable);

    Product updateProduct(Product product);

    Product deleteProduct(int productId);
}
