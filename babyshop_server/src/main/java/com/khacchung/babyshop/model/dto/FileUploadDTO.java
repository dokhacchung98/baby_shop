package com.khacchung.babyshop.model.dto;

import org.springframework.web.multipart.MultipartFile;

public class FileUploadDTO {
    private MultipartFile image;

    public FileUploadDTO() {
    }

    public FileUploadDTO(MultipartFile image) {
        this.image = image;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }
}
