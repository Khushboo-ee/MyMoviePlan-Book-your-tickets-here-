package com.simplilearn.capstone2.dao;

import org.springframework.data.repository.CrudRepository;

import com.simplilearn.capstone2.entity.OrderDetail;

public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> {

}
