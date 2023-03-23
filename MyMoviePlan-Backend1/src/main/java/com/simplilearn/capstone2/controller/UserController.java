package com.simplilearn.capstone2.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.capstone2.entity.User;
import com.simplilearn.capstone2.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userservice;
	
	@PostConstruct//will run each the program starts
	public void initRolesAndUsers() {
		userservice.initRolesAndUser();
	}
	
	@PostMapping({"/registerNewUser"})
	public User RegisterNewUser(@RequestBody User user) {
		return userservice.RegisterNewUser(user); 
	}
	
	@GetMapping({"/forAdmin"})
	@PreAuthorize("hasRole('Admin')") //this will give access only to users having role of Admin
	public String forAdmin() {
		return "This URL is only accessible to admin";
	}
	
	@GetMapping({"/forUser"})
	@PreAuthorize("hasRole('User')")
	public String forUser() {
		return "This URL is only accessible to User";
	}

}
