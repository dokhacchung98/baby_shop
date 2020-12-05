package com.khacchung.babyshop;

import org.apache.log4j.PropertyConfigurator;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EntityScan(basePackages = "com.khacchung.babyshop")
public class BabyshopApplication implements CommandLineRunner {

    public static void main(String[] args) {
        PropertyConfigurator.configure("src/log4j.properties");
        SpringApplication.run(BabyshopApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
    }
}
