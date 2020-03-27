package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.auth.CustomUserDetail;

import com.khacchung.babyshop.model.dao.Favorite;
import com.khacchung.babyshop.model.dto.FavoriteDTO;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @RequestMapping(value = "/user/add-to-favorite", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<Favorite> createFavorite(@Valid @RequestBody FavoriteDTO favoriteDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if ((auth instanceof AnonymousAuthenticationToken)) {
            return new ResponeDataDTO<>(Result.FORBIDDEN);
        } else {
            try {
                CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
                Favorite favorite = new Favorite();
                favorite.setProductId(favoriteDTO.getProductId());
                favorite.setUserId(userDetails.getUser().getId());
                Favorite tmp = favoriteService.addFavorite(favorite);
                if(tmp == null) {
                    return new ResponeDataDTO<>(Result.BAD_REQUEST);
                }
                return new ResponeDataDTO.Builder<Favorite>()
                        .withMessage(Constants.SUCCESS_MSG)
                        .withCode(Constants.SUCCESS_CODE)
                        .withData(tmp)
                        .build();
            } catch (Exception e) {
                return new ResponeDataDTO<>(Result.BAD_REQUEST);
            }
        }
    }

    @RequestMapping(value = "/user/remove-favorite", method = RequestMethod.GET)
    public ResponeDataDTO<Favorite> deleteFavorite(@Param("id") int id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if ((auth instanceof AnonymousAuthenticationToken)) {
            return new ResponeDataDTO<>(Result.FORBIDDEN);
        } else {
            try {
                Favorite favorite = favoriteService.removeFavorite(id);
                if (favorite == null) {
                    return new ResponeDataDTO<>(Result.NOT_FOUND);
                }
                return new ResponeDataDTO.Builder<Favorite>()
                        .withMessage(Constants.SUCCESS_MSG)
                        .withCode(Constants.SUCCESS_CODE)
                        .withData(favorite)
                        .build();
            } catch (Exception e) {
                return new ResponeDataDTO<>(Result.BAD_REQUEST);
            }
        }
    }

    @RequestMapping(value = "/user/get-favorite", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Favorite>> getFavorite(@Param("page") int page, @Param("size") int size) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if ((auth instanceof AnonymousAuthenticationToken)) {
            return new ResponeDataDTO<>(Result.FORBIDDEN);
        } else {
            try {
                CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
                Page<Favorite> favorite = favoriteService.getFavorites(PageRequest.of(page, size), userDetails.getUser().getId());
                if (favorite == null) {
                    return new ResponeDataDTO<>(Result.NOT_FOUND);
                }
                return new ResponeDataDTO.Builder<Page<Favorite>>()
                        .withMessage(Constants.SUCCESS_MSG)
                        .withCode(Constants.SUCCESS_CODE)
                        .withData(favorite)
                        .build();
            } catch (Exception e) {
                return new ResponeDataDTO<>(Result.BAD_REQUEST);
            }
        }
    }
}
