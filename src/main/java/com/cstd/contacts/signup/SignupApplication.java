package com.cstd.contacts.signup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.cstd.contacts"})
public class SignupApplication {

	public static void main(String[] args) {
		SpringApplication.run(SignupApplication.class, args);
	}

}
