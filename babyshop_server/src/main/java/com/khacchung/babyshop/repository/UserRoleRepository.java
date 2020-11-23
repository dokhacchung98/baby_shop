package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRole, Integer> {
    @Query(value = "select r from UserRole r where r.idUser = :id ")
    List<UserRole> getRoleUser(@Param("id") int id);
}
