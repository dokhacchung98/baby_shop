package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.User;
import com.khacchung.babyshop.model.dto.UserInformationDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDetails loadUserById(Integer id);

    UserDetails registerUser(String username, String password);

    User updateInformation(UserInformationDTO userInformationDTO);

    Page<User> getUser(Pageable pageable, int currentId);

    User deleteUser(int id);
}
