package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Favorite;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {
    @Query(value = "SELECT e FROM Favorite e WHERE e.userId = :id")
    Page<Favorite> findFavoriteByUser(Pageable pageable, @Param("id")int id);

    @Query(value = "SELECT e FROM Favorite e WHERE e.userId = :id AND e.productId = :idP")
    Favorite checkExist(@Param("id")int idUser, @Param("idP")int idProduct);
}
