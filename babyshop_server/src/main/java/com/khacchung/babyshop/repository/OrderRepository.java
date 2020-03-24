package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {

}
