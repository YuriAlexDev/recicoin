package com.recicoin.Recicoin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class RecicoinApplication {

<<<<<<< HEAD
    public static void main(String[] args) {
        SpringApplication.run(RecicoinApplication.class, args);
    }
=======
	public static void main(String[] args) {
		SpringApplication.run(RecicoinApplication.class, args);
	}
	@Bean
	public PasswordEncoder getPasswordEncorder() {
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}

>>>>>>> e5bd92478b7693d6400b2cf67a61445651ca00a2
}
