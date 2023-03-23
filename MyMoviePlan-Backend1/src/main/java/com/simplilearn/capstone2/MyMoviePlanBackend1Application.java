package com.simplilearn.capstone2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
//@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class })
public class MyMoviePlanBackend1Application {

	public static void main(String[] args) {
		SpringApplication.run(MyMoviePlanBackend1Application.class, args);
	}

}
