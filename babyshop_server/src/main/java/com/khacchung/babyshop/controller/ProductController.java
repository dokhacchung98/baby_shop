package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.dao.Catalog;
import com.khacchung.babyshop.model.dao.Product;
import com.khacchung.babyshop.model.dto.FileUploadDTO;
import com.khacchung.babyshop.model.dto.ProductDTO;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(value = "/upload-image", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public @ResponseBody
    ResponeDataDTO<String> uploadImage(FileUploadDTO file) {
        ResponeDataDTO<String> response = new ResponeDataDTO<>();
        try {
            response.setData(productService.uploadImage(file));
            response.setCode(Constants.SUCCESS_CODE);
            response.setMessage(Constants.SUCCESS_MSG);
        } catch (Exception e) {
            response.setData(null);
            response.setCode(Constants.ERR_CODE_BAD_REQUEST);
            response.setMessage(Constants.MSG_TEMP + Constants.ERR_MSG_BAD_REQUEST);
        }
        return response;
    }


    @RequestMapping(value = "/admin/create-product", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<Product> createCatalog(@Valid @RequestBody ProductDTO productDTO) {
        try {
            Product product = new Product();
            product.setName(productDTO.getName());
            product.setPrice(productDTO.getPrice());
            product.setDescription(productDTO.getDescription());
            product.setDiscount(productDTO.getDiscount());
            product.setImagePath(productDTO.getImagePath());
            product.setHot(productDTO.isHot());
            product.setColor(productDTO.isColor());
            product.setColor(productDTO.isColor());
            product.setSizeValue(productDTO.getSizeValue());
            product.setColorValue(productDTO.getColorValue());
            Product tmp = productService.createProduct(product, productDTO.getListCatalogsId());
            if (tmp == null) {
                return new ResponeDataDTO<>(Result.BAD_REQUEST);
            }
            return new ResponeDataDTO<>(Constants.SUCCESS_MSG, Constants.SUCCESS_CODE, tmp);
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/get-products", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Product>> getCatalogs(@Param("page") int page, @Param("size") int size) {
        try {
            Page<Product> products = productService.getProducts(PageRequest.of(page, size));
            return new ResponeDataDTO.Builder<Page<Product>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(products)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/delete-product", method = RequestMethod.GET)
    public ResponeDataDTO<String> deleteCatalog(@Param("id") int id) {
        try {
            Product product = productService.deleteProduct(id);
            ResponeDataDTO<String> tmp = new ResponeDataDTO<>(Result.SUCCESS);
            tmp.setData(product.getName());
            return tmp;
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/admin/update-product", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<Product> updateCatalog(@RequestBody ProductDTO productDTO) {
        Product product = new Product();
        product.setId(productDTO.getId());
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        product.setDescription(productDTO.getDescription());
        product.setDiscount(productDTO.getDiscount());
        product.setImagePath(productDTO.getImagePath());
        product.setHot(productDTO.isHot());
        product.setColor(productDTO.isColor());
        product.setSize(productDTO.isSize());
        product.setSizeValue(productDTO.getSizeValue());
        product.setColorValue(productDTO.getColorValue());
        try {
            Product tmp = productService.updateProduct(product, productDTO.getListCatalogsId());
            return new ResponeDataDTO<>(Constants.SUCCESS_MSG, Constants.SUCCESS_CODE, tmp);
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/get-detail-product", method = RequestMethod.GET)
    public ResponeDataDTO<Product> getDetail(@Param("id") int id) {
        try {
            Product product = productService.getDetail(id);
            if (product == null) {
                return new ResponeDataDTO<>(Result.NOT_FOUND);
            }
            return new ResponeDataDTO.Builder<Product>()
                    .withMessage(Constants.SUCCESS_MSG)
                    .withCode(Constants.SUCCESS_CODE)
                    .withData(product)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/get-product-by-type", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Product>> getProductListByType(@Param("page") int page,
                                                              @Param("size") int size,
                                                              @Param("idCatalog") int idCatalog,
                                                              @Param("type") int type) {
        Pageable pageable;
        switch (type) {
            case 1:
                pageable = PageRequest.of(page, size, Sort.by("name"));
                break;
            case 2:
                pageable = PageRequest.of(page, size, Sort.by("name").descending());
                break;
            case 3:
                pageable = PageRequest.of(page, size, Sort.by("price"));
                break;
            case 4:
                pageable = PageRequest.of(page, size, Sort.by("price").descending());
                break;
            default:
                pageable = PageRequest.of(page, size);
        }
        try {

            Page<Product> products = productService.getProductsByCatalog(pageable, idCatalog);
            return new ResponeDataDTO.Builder<Page<Product>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(products)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/search-products", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Product>> getProductListByType(@Param("page") int page,
                                                              @Param("size") int size,
                                                              @Param("keyword") String keyword) {
        try {
            Page<Product> products = productService.searchProduct(PageRequest.of(page, size), keyword);
            return new ResponeDataDTO.Builder<Page<Product>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(products)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/get-new-products", method = RequestMethod.GET)
    public ResponeDataDTO<List<Product>> getFiveNewProduct() {
        try {
            List<Product> products = productService.getNewProduct();
            return new ResponeDataDTO.Builder<List<Product>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(products)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/get-seller", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Product>> getSeller(@Param("page") int page, @Param("size") int size) {
        try {
            Page<Product> products = productService.getSellerProduct(page, size);
            return new ResponeDataDTO.Builder<Page<Product>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(products)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/random-product", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Product>> getRandomProduct(@Param("id") int id, @Param("catalogId") int catalogId) {
        try {
            Page<Product> products = productService.randomProduct(id, catalogId);
            return new ResponeDataDTO.Builder<Page<Product>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(products)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }
}
