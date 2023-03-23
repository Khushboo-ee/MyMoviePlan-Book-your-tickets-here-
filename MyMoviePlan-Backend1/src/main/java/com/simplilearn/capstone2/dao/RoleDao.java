package com.simplilearn.capstone2.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.capstone2.entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role, String>{

}
