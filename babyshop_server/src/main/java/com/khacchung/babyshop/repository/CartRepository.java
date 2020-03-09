package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {

    @Query(value = "SELECT e FROM Cart e WHERE e.userId = :idUser")
    Page<Cart> findCart(Pageable pageable, @Param("idUser") int idUser);
}
