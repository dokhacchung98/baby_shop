package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends CrudRepository<Blog, Integer> {

    @Query("SELECT e FROM Blog e")
    Page<Blog> findBlogs(Pageable pageable);

    @Query("SELECT e FROM Blog e WHERE e.title LIKE %:keyword%")
    Page<Blog> searchBlog(Pageable pageable, @Param("keyword") String keyword);
}
