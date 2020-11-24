package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.RolePermission;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RolePermissionRepository extends CrudRepository<RolePermission, Integer> {
    @Query(value = "select  t from RolePermission  t where t.idRole = :role and t.idPermission = :per")
    RolePermission getItem(@Param("role") int role, @Param("per") int per);
}
