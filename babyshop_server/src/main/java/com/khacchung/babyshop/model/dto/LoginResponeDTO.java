package com.khacchung.babyshop.model.dto;

public class LoginResponeDTO {
    private String token;
    private String tokenType = "Bearer ";

    public LoginResponeDTO(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
