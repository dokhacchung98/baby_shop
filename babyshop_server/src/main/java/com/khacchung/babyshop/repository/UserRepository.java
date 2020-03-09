package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT u FROM User u WHERE u.username = :username")
    User getUserByUserName(@Param("username") String userName);

//    @Query(value = "SELECT u FROM User u WHERE u.username = ?1")
//    User getUserByUserName(/*@Param("username") */String userName);
}
