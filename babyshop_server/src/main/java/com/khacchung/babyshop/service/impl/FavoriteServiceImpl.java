package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Favorite;
import com.khacchung.babyshop.repository.FavoriteRepository;
import com.khacchung.babyshop.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl implements FavoriteService {
    private Logger logger = Logger.getLogger(FavoriteServiceImpl.class);

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Override
    public Favorite addFavorite(Favorite favorite) {
        try{
            Favorite exits = favoriteRepository.checkExist(favorite.getUserId(), favorite.getProductId());
            if(exits != null) {
                return null;
            }
            Favorite tmp = favoriteRepository.save(favorite);
            return tmp;
        }catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Favorite removeFavorite(int id) {
        try{
            Favorite favorite = favoriteRepository.findById(id).get();
            if(favorite != null) {
                favoriteRepository.delete(favorite);
                return favorite;
            }
        }catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Favorite> getFavorites(Pageable pageable, int id) {
        try{
            Page<Favorite> favorites = favoriteRepository.findFavoriteByUser(pageable, id);
            return favorites;
        }catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
