package com.simplilearn.capstone2.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.simplilearn.capstone2.dao.RoleDao;
import com.simplilearn.capstone2.dao.UserDao;
import com.simplilearn.capstone2.entity.Role;
import com.simplilearn.capstone2.entity.User;

@Service
public class UserService {
	@Autowired //(required=true)
	private UserDao userdao;
	
	@Autowired //(required=true)
	private RoleDao roledao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public User RegisterNewUser(User user) {
		Role role = roledao.findById("User").get();
		
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRole(roles);
		
		user.setUserpassword(getEncodedPassword(user.getUserpassword()));
		
		return userdao.save(user);
	}
	
	public void initRolesAndUser() {
		Role adminRole = new Role();
		adminRole.setRoleName("Admin");
		adminRole.setRoleDescription("Administrative role for the website");
		roledao.save(adminRole);
		
		Role userRole = new Role();
		userRole.setRoleName("User");
		userRole.setRoleDescription("Default role for newly created user");
		roledao.save(userRole);
		
		User adminUser = new User();
		adminUser.setFullName("admin");
		adminUser.setUserName("admin123");
		adminUser.setUserpassword(getEncodedPassword("pwd@123"));
		Set<Role> adminRoles = new HashSet<>();
		adminRoles.add(adminRole);
		adminUser.setRole(adminRoles);
		userdao.save(adminUser);
		
//		User user = new User();
//		user.setFullName("Raj Sharma");
//		user.setUserName("raj123");
//		user.setUserpassword(getEncodedPassword("raj@123"));;
//		Set<Role> userRoles = new HashSet<>();
//		userRoles.add(userRole);
//		user.setRole(userRoles);
//		userdao.save(user);
	}
	
	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}
}

/*
 * adminUser.setUserpassword("pwd@123");
 * This has to store encrypted password*/
