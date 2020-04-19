package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.dao.Blog;
import com.khacchung.babyshop.model.dto.BlogDTO;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Date;

@RestController
@RequestMapping("/api")
public class BlogController {
    @Autowired
    private BlogService blogService;

    @RequestMapping(value = "/admin/create-blog", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<Blog> createBlog(@Valid @RequestBody BlogDTO requestDTO) {
        Blog blog = new Blog();
        blog.setTitle(requestDTO.getTitle());
        blog.setShortDescription(requestDTO.getShortDescription());
        blog.setDescription(requestDTO.getDescription());
        blog.setCreatedDate(new Date());
        blog.setImagePath(requestDTO.getImagePath());
        try {
            Blog tmp = blogService.createBlog(blog);
            return new ResponeDataDTO<>(Constants.SUCCESS_MSG, Constants.SUCCESS_CODE, tmp);
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/get-blogs", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Blog>> getBlogs(@Param("page") int page, @Param("size") int size, @Param("type") int type) {
        try {
            Pageable pageable;
            switch (type) {
                case 1:
                    pageable = PageRequest.of(page, size, Sort.by("id").descending());
                    break;
                default:
                    pageable = PageRequest.of(page, size);
            }
            Page<Blog> catalogs = blogService.getBlogs(pageable);
            return new ResponeDataDTO.Builder<Page<Blog>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(catalogs)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/delete-blog", method = RequestMethod.GET)
    public ResponeDataDTO<String> deleteBlog(@Param("id") int id) {
        try {
            Blog blog = blogService.deleteBlog(id);
            ResponeDataDTO<String> tmp = new ResponeDataDTO<>(Result.SUCCESS);
            tmp.setData(blog.getTitle());
            return tmp;
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/admin/update-blog", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<Blog> updateBlog(@Valid @RequestBody BlogDTO requestDTO) {
        try {
            Blog blog = blogService.getBlogById(requestDTO.getId());
            blog.setTitle(requestDTO.getTitle());
            blog.setShortDescription(requestDTO.getShortDescription());
            blog.setDescription(requestDTO.getDescription());
            blog.setImagePath((requestDTO.getImagePath()));
            Blog tmp = blogService.updateBlog(blog);
            return new ResponeDataDTO<>(Constants.SUCCESS_MSG, Constants.SUCCESS_CODE, tmp);
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/get-blog-by-id", method = RequestMethod.GET)
    public ResponeDataDTO<Blog> getBlogByid(@Param("id") int id) {
        try {
            Blog blog = blogService.getBlogById(id);
            if (blog != null) {
                return new ResponeDataDTO.Builder<Blog>()
                        .withMessage(Constants.SUCCESS_MSG)
                        .withCode(Constants.SUCCESS_CODE)
                        .withData(blog)
                        .build();
            }
            return new ResponeDataDTO<>(Result.NOT_FOUND);
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/search-blog", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Blog>> searchBlog(@Param("page") int page, @Param("size") int size, @Param("keyword") String keyword) {
        try {
            Page<Blog> catalogs = blogService.searchBlog(PageRequest.of(page, size), keyword);
            return new ResponeDataDTO.Builder<Page<Blog>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(catalogs)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/random-blog", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Blog>> randomBlog(@Param("id") int id) {
        try {
            Page<Blog> catalogs = blogService.getRandom(PageRequest.of(0, 3), id);
            return new ResponeDataDTO.Builder<Page<Blog>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(catalogs)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }
}
