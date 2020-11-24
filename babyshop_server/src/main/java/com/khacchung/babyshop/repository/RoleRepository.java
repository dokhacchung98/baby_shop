package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {
    @Query(value = "select  e from Role e where e.name <> 'ROLE_SYS' and e.name <> 'ROLE_USER'")
    List<Role> getListRoleAdmin();
}
