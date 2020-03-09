package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Cart;
import com.khacchung.babyshop.repository.CartRepository;
import com.khacchung.babyshop.service.CartService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {
    private static Logger logger = Logger.getLogger(CartServiceImpl.class);

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart createCart(Cart cart) {
        try {
            Cart tmp = cartRepository.save(cart);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Cart> getCarts(Pageable pageable, int idUser) {
        try {
            Page<Cart> tmp = cartRepository.findCart(pageable, idUser);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Cart updateCart(Cart cart) {
        try {
            Cart tmp = cartRepository.save(cart);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Cart deleteCart(int cartId) {
        try {
            Cart tmp = cartRepository.findById(cartId).get();
            cartRepository.delete(tmp);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Cart updateNumber(int idCart, int number) {
        try {
            Cart cart = cartRepository.findById(idCart).get();
            if (cart != null && cart.getNumber() != number) {
                cart.setNumber(number);
                cartRepository.save(cart);
                return cart;
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
