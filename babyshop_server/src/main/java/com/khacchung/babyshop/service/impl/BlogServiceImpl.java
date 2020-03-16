package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Blog;
import com.khacchung.babyshop.repository.BlogRepository;
import com.khacchung.babyshop.service.BlogService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl implements BlogService {
    private static Logger logger = Logger.getLogger(BlogServiceImpl.class);

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Blog createBlog(Blog blog) {
        try {
            Blog tmp = blogRepository.save(blog);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Blog> getBlogs(Pageable pageable) {
        try {
            Page<Blog> tmp = blogRepository.findBlogs(pageable);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Blog updateBlog(Blog blog) {
        try {
            blogRepository.save(blog);
            return blog;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Blog deleteBlog(int blogId) {
        try {
            Blog tmp = blogRepository.findById(blogId).get();
            if (tmp != null) {
                blogRepository.delete(tmp);
                return tmp;
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Blog getBlogById(int blogId) {
        try {
            Blog tmp = blogRepository.findById(blogId).get();
            if (tmp != null) {
                return tmp;
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
