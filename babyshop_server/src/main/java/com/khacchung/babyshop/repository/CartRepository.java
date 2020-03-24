package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {

    @Query(value = "SELECT e FROM Cart e WHERE e.userId = :idUser")
    Page<Cart> findCart(Pageable pageable, @Param("idUser") int idUser);

    @Query(value = "SELECT e FROM Cart e WHERE e.userId = ?1 AND e.productId = ?2 AND e.sizeValue = ?3 AND e.colorValue = ?4")
    Cart findCartExist(int idUser, int productId, String size, String color);

    @Query(value = "SELECT e FROM Cart e WHERE e.userId = :id")
    List<Cart> findAllCartByUserId(@Param("id") int id);
}
