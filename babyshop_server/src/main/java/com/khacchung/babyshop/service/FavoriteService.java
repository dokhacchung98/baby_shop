package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Favorite;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FavoriteService {
    Favorite addFavorite(Favorite favorite);

    Favorite removeFavorite(int id);

    Page<Favorite> getFavorites(Pageable pageable, int id);
}
