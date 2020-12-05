package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Permission;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PermissionRepository extends CrudRepository<Permission, Integer> {
    @Query(value = "select e from Permission e where e.type = :typeq")
    List<Permission> getListType(@Param("typeq") String typeq);
}
