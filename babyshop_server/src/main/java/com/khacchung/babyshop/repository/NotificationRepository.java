package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Notification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends CrudRepository<Notification, Integer> {

    @Query(value = "SELECT e FROM Notification e WHERE e.userId = :idUser")
    Page<Notification> findNotification(Pageable pageable, @Param("idUser") int idUser);
}
