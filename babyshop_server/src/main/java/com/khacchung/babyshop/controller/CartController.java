package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.auth.CustomUserDetail;
import com.khacchung.babyshop.model.dao.Cart;
import com.khacchung.babyshop.model.dto.CartDTO;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    private CartService cartService;

    @RequestMapping(value = "/user/add-to-cart", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<Cart> createCart(CartDTO cartDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if ((auth instanceof AnonymousAuthenticationToken)) {
            return new ResponeDataDTO<>(Result.FORBIDDEN);
        } else {
            try {
                CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
                Cart cart = new Cart();
                cart.setProductId(cartDTO.getProductId());
                cart.setColor(cartDTO.isColor());
                cart.setColor(cartDTO.getColor());
                cart.setSize(cartDTO.isSize());
                cart.setSize(cartDTO.getSize());
                cart.setUserId(userDetails.getUser().getId());
                Cart tmp = cartService.createCart(cart);
                return new ResponeDataDTO.Builder<Cart>()
                        .withMessage(Constants.SUCCESS_MSG)
                        .withCode(Constants.SUCCESS_CODE)
                        .withData(tmp)
                        .build();
            } catch (Exception e) {
                return new ResponeDataDTO<>(Result.BAD_REQUEST);
            }
        }
    }

    @RequestMapping(value = "/user/get-carts", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Cart>> getCart(@Param("page") int page, @Param("size") int size) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
            Page<Cart> tmp = cartService.getCarts(PageRequest.of(page, size), userDetails.getUser().getId());
            return new ResponeDataDTO.Builder<Page<Cart>>()
                    .withData(tmp)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        }
        return new ResponeDataDTO<>(Result.FORBIDDEN);
//        CustomUserDetail userDetails =
//                (CustomUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @RequestMapping(value = "/user/remove-to-cart")
    public ResponeDataDTO<Cart> deleteCart(@Param("id") int id) {
        try {
            Cart cart = cartService.deleteCart(id);
            return new ResponeDataDTO.Builder<Cart>()
                    .withMessage(Constants.SUCCESS_MSG)
                    .withCode(Constants.SUCCESS_CODE)
                    .withData(cart)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/user/update-cart", method = RequestMethod.GET)
    public ResponeDataDTO<Cart> updateNumberCart(@Param("idCart") int idCart, @Param("number") int number) {
        try {
            Cart cart = cartService.updateNumber(idCart, number);
            return new ResponeDataDTO.Builder<Cart>()
                    .withData(cart)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }
}
