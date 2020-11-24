package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Permission;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermissionRepository extends CrudRepository<Permission, Integer> {

}
