package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.auth.CustomUserDetail;
import com.khacchung.babyshop.model.dao.User;
import com.khacchung.babyshop.model.dto.UserInformationDTO;
import com.khacchung.babyshop.repository.UserRepository;
import com.khacchung.babyshop.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {
    private static Logger logger = Logger.getLogger(UserServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String s) {
        User user = userRepository.getUserByUserName(s);
        if (user == null) {
            throw new UsernameNotFoundException(s);
        }
        return new CustomUserDetail(user);
    }

    @Override
    @Transactional
    public UserDetails loadUserById(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id"));
        return new CustomUserDetail(user);
    }

    @Override
    public UserDetails registerUser(String username, String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRoleId(1);
        user.setCreatedDate(new Date());
        try {
            userRepository.save(user);
            return new CustomUserDetail(user);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public User updateInformation(UserInformationDTO userInformationDTO) {
        try {
            User user = userRepository.findById(userInformationDTO.getId()).get();
            if (user != null) {
                user.setPhone(userInformationDTO.getPhone());
                user.setEmail(userInformationDTO.getEmail());
                user.setName(userInformationDTO.getName());
                user.setAddress(userInformationDTO.getAddress());
                userRepository.save(user);
                return user;
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<User> getUser(Pageable pageable, int currentId) {
        try {
            Page<User> users = userRepository.getAllUser(pageable, currentId);
            return  users;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public User deleteUser(int id) {
        try {
            User users = userRepository.findById(id).get();
            if(users != null){
                userRepository.delete(users);
                return users;
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
