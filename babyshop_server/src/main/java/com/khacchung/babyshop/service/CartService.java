package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CartService {
    Cart createCart(Cart cart);

    Page<Cart> getCarts(Pageable pageable, int idUser);

    Cart updateCart(Cart cart);

    Cart deleteCart(int cartId);

    Cart updateNumber(int idCart, int number);
}
