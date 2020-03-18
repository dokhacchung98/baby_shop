package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.jwt.JwtTokenProvider;
import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.auth.CustomUserDetail;
import com.khacchung.babyshop.model.dao.User;
import com.khacchung.babyshop.model.dto.*;
import com.khacchung.babyshop.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @RequestMapping(value = "/login", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<LoginResponeDTO> authenticateUser(@Valid @RequestBody LoginRequestDTO loginRequestDTO) {
        try {
            // xác thực từ user và pass
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequestDTO.getUsername(),
                            loginRequestDTO.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = jwtTokenProvider.generateToken((CustomUserDetail) authentication.getPrincipal());
            return new ResponeDataDTO.Builder<LoginResponeDTO>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withData(new LoginResponeDTO(jwt))
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/login-admin", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<LoginResponeDTO> authenticateUserAdmin(@Valid @RequestBody LoginRequestDTO loginRequestDTO) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequestDTO.getUsername(),
                            loginRequestDTO.getPassword()
                    )
            );
            CustomUserDetail customUserDetail = (CustomUserDetail) authentication.getPrincipal();
            if (!customUserDetail.getUser().getRole().getName().equals("ROLE_ADMIN")) {
                return new ResponeDataDTO<>(Result.BAD_REQUEST);
            }
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = jwtTokenProvider.generateToken((CustomUserDetail) authentication.getPrincipal());
            return new ResponeDataDTO.Builder<LoginResponeDTO>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withData(new LoginResponeDTO(jwt))
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<String> registerUser(@Valid @RequestBody RegisterRequestDTO registerRequestDTO) {
        if (!registerRequestDTO.getConfirmPassword().trim().equals(registerRequestDTO.getPassword().trim())) {
            return new ResponeDataDTO.Builder<String>()
                    .withMessage(Constants.ERR_MSG_BAD_REQUEST)
                    .withData(Constants.ERR_MSG_PASS_NOT_MATCH)
                    .withCode(Constants.ERR_CODE_BAD_REQUEST)
                    .build();
        }
        CustomUserDetail userDetails = (CustomUserDetail) userService.registerUser(
                registerRequestDTO.getUsername().trim()
                , registerRequestDTO.getPassword().trim()
        );
        if (userDetails != null) {
            String jwt = jwtTokenProvider.generateToken(userDetails);
            return new ResponeDataDTO.Builder<String>()
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(jwt)
                    .withCode(Constants.SUCCESS_CODE)
                    .build();
        } else {
            return new ResponeDataDTO.Builder<String>()
                    .withMessage(Constants.ERR_MSG_BAD_REQUEST)
                    .withData(Constants.ERR_MSG_USER_EXIST)
                    .withCode(Constants.ERR_CODE_BAD_REQUEST)
                    .build();
        }
    }

    @RequestMapping(value = "/user/update-information", method = RequestMethod.POST)
    public ResponeDataDTO<User> updateInformationUser(UserInformationDTO userInformationDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
            if (userDetails.getUser().getId() == userInformationDTO.getId()) {
                try {
                    User user = userService.updateInformation(userInformationDTO);
                    return new ResponeDataDTO.Builder<User>()
                            .withMessage(Constants.SUCCESS_MSG)
                            .withCode(Constants.SUCCESS_CODE)
                            .withData(user)
                            .build();
                } catch (Exception e) {
                    return new ResponeDataDTO<>(Result.BAD_REQUEST);
                }
            }
        }
        return new ResponeDataDTO<>(Result.BAD_REQUEST);
    }

    @RequestMapping(value = "/user/get-information", method = RequestMethod.GET)
    public ResponeDataDTO<User> getInformationUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
            return new ResponeDataDTO.Builder<User>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(userDetails.getUser())
                    .build();
        }
        return new ResponeDataDTO<>(Result.FORBIDDEN);
    }

    @RequestMapping(value = "/admin/get-users", method = RequestMethod.GET)
    public ResponeDataDTO<Page<User>> getAllUser(@Param("page") int page, @Param("size") int size) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
            Page<User> tmp = userService.getUser(PageRequest.of(page, size), userDetails.getUser().getId());
            return new ResponeDataDTO.Builder<Page<User>>()
                    .withData(tmp)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        }
        return new ResponeDataDTO<>(Result.FORBIDDEN);
    }

    @RequestMapping(value = "/admin/delete-users", method = RequestMethod.GET)
    public ResponeDataDTO<User> getAllUser(@Param("id") int id) {

        User tmp = userService.deleteUser(id);
        if (tmp == null) {
            return new ResponeDataDTO<>(Result.NOT_FOUND);
        }
        return new ResponeDataDTO.Builder<User>()
                .withData(tmp)
                .withCode(Constants.SUCCESS_CODE)
                .withMessage(Constants.SUCCESS_MSG)
                .build();
    }
}
