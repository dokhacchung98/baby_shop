package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.User;
import com.khacchung.babyshop.model.dto.UserInformationDTO;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDetails loadUserById(Integer id);

    UserDetails registerUser(String username, String password);

    User updateInformation(UserInformationDTO userInformationDTO);
}
