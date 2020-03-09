package com.khacchung.babyshop.common.extension;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileExtension {
    public static String saveFile(MultipartFile file) {
        String host = "http://localhost:8080/";
        if (!file.isEmpty()) {
            byte[] bytes;
            try {
                bytes = file.getBytes();
                String fileName = file.getOriginalFilename();
                String fileLocation = new File("static\\images") + "\\" + fileName;
                FileOutputStream fos = new FileOutputStream(fileLocation);
                fos.write(bytes);
                fos.close();

                return host + "images\\" + fileName;
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
        } else {
            return null;
        }
    }
}
