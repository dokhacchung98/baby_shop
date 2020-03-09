package com.khacchung.babyshop.model.dto;

import com.khacchung.babyshop.common.utils.Result;

public class ResponeDataDTO<T> {
    private String message;
    private int code;
    private T data;

    public ResponeDataDTO(Result result) {
        this.code = result.getCode();
        this.message = result.getMessage();
    }

    public ResponeDataDTO(String message, int code, T data) {
        super();
        this.message = message;
        this.code = code;
        this.data = data;
    }

    public ResponeDataDTO() {
        super();
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public static class Builder<T> {
        private String message;
        private int code;
        private T data;

        public Builder<T> withMessage(String message) {
            this.message = message;
            return this;
        }

        public Builder<T> withCode(int code) {
            this.code = code;
            return this;
        }

        public Builder<T> withData(T data) {
            this.data = data;
            return this;
        }

        public ResponeDataDTO<T> build() {
            return new ResponeDataDTO<T>(message, code, data);
        }
    }
}
