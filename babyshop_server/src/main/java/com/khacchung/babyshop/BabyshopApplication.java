package com.khacchung.babyshop;

import com.khacchung.babyshop.model.dao.User;
import com.khacchung.babyshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;

@SpringBootApplication
@EntityScan(basePackages = "com.khacchung.babyshop")
public class BabyshopApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(BabyshopApplication.class, args);
    }
//
//    @Autowired
//    UserRepository userRepository;
//    @Autowired
//    PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
//        User user = new User();
//        user.setUsername("admin@gmail.com");
//        user.setPassword(passwordEncoder.encode("secret"));
//        user.setCreatedDate(new Date());
//        user.setRoleId(1);
//        userRepository.save(user);
//        System.out.println(user);
    }
}
