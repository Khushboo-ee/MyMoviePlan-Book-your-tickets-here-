package com.simplilearn.capstone2.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.capstone2.entity.Cart;
import com.simplilearn.capstone2.entity.User;

@Repository
public interface CartDao extends CrudRepository<Cart, Integer>{
	
	public List<Cart> findByUser(User user);

}
//findByUser here user has to be same as mentioned in User user; inside Cart entity class