package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BlogService {
    Blog createBlog(Blog blog);

    Page<Blog> getBlogs(Pageable pageable);

    Blog updateBlog(Blog blog);

    Blog deleteBlog(int blogId);

    Blog getBlogById(int blogId);

    Page<Blog> searchBlog(Pageable pageable, String keyword);

    Page<Blog> getRandom(Pageable pageable, int existBlog);
}
