package com.simplilearn.capstone2.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.capstone2.entity.OrderDetail;
import com.simplilearn.capstone2.entity.User;
@Repository
public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> {

	public List<OrderDetail> findByUser(User user);
	//this will take object of user and will return the list of orderdetail
	//in this method findBy is mandatory followed by variable name in OrderDetail class i.e is user in this case.
	
	public List<OrderDetail> findByOrderStatus(String status);
}
