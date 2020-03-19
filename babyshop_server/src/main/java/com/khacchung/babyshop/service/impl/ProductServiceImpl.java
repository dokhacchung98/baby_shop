package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.common.extension.FileExtension;
import com.khacchung.babyshop.model.dao.Catalog;
import com.khacchung.babyshop.model.dao.Product;
import com.khacchung.babyshop.model.dto.FileUploadDTO;
import com.khacchung.babyshop.repository.CatalogRepository;
import com.khacchung.babyshop.repository.ProductRepository;
import com.khacchung.babyshop.service.ProductService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private static Logger logger = Logger.getLogger(ProductServiceImpl.class);

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CatalogRepository catalogRepository;

    @Override
    public String uploadImage(FileUploadDTO file) {
        String pathFile = "";
        try {
            pathFile = FileExtension.saveFile(file.getImage());
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage());
        }
        return pathFile;
    }

    @Override
    public Product createProduct(Product product, List<Integer> listCatalogId) {
        try {
            List<Catalog> catalogs = new ArrayList<>();
            if (listCatalogId != null) {
                for (int id : listCatalogId) {
                    Catalog catalogTmp = catalogRepository.findById(id).get();
                    catalogs.add(catalogTmp);
                }
            }
            product.setCatalogs(catalogs);
            Product tmp = productRepository.save(product);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Product> getProducts(Pageable pageable) {
        try {
            Page<Product> tmp = productRepository.findProduct(pageable);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Product updateProduct(Product product, List<Integer> listCatalogId) {
        try {
            List<Catalog> catalogs = new ArrayList<>();
            if (listCatalogId != null) {
                for (int id : listCatalogId) {
                    Catalog catalogTmp = catalogRepository.findById(id).get();
                    catalogs.add(catalogTmp);
                }
            }
            product.setCatalogs(catalogs);
            product = productRepository.save(product);
            return product;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Product deleteProduct(int productId) {
        try {
            Product tmp = productRepository.findById(productId).get();
            tmp.setCatalogs(null);
            productRepository.delete(tmp);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Product getDetail(int id) {
        try {
            Product tmp = productRepository.findById(id).get();
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Product> getProductsByCatalog(Pageable pageable, int idCatalog) {
        try {
            Page<Product> tmp = productRepository.getProductByCatalog(pageable, idCatalog);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Product> searchProduct(Pageable pageable, String keyword) {
        try {
            Page<Product> tmp = productRepository.searchProduct(pageable, keyword);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
