package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends CrudRepository<Blog, Integer> {

    @Query("SELECT e FROM Blog e")
    Page<Blog> findBlogs(Pageable pageable);
}
