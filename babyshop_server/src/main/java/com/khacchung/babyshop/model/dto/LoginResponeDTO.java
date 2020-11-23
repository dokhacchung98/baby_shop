package com.khacchung.babyshop.model.dto;

public class LoginResponeDTO {
    private String token;
    private String tokenType = "Bearer ";
    private boolean isAdmin = false;

    public LoginResponeDTO(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}
