package com.simplilearn.capstone2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.capstone2.configuration.JwtRequestFilter;
import com.simplilearn.capstone2.dao.MovieTicketDao;
import com.simplilearn.capstone2.dao.OrderDetailDao;
import com.simplilearn.capstone2.dao.UserDao;
import com.simplilearn.capstone2.entity.MovieTickets;
import com.simplilearn.capstone2.entity.OrderDetail;
import com.simplilearn.capstone2.entity.OrderInput;
import com.simplilearn.capstone2.entity.OrderTicketQuantity;
import com.simplilearn.capstone2.entity.User;

@Service
public class OrderDetailService {
	
	private static final String ORDER_PLACED = "Placed";
	
	@Autowired
	private OrderDetailDao orderDetailDao;
	@Autowired
	private MovieTicketDao mtDao;
	@Autowired
	private UserDao userDao;

	public void placeOrder(OrderInput orderInput) {
		List<OrderTicketQuantity> ticketQuantityList = orderInput.getOrderTicketQuantity();
		
		for(OrderTicketQuantity o: ticketQuantityList) {
			MovieTickets movieTicket = mtDao.findById(o.getTicketId()).get();//will return a product i.e movieTicket here
			
			String currentUser = JwtRequestFilter.CURRENT_USER;
			User user = userDao.findById(currentUser).get();			
			OrderDetail orderDetail = new OrderDetail(
					orderInput.getFullName(),
					orderInput.getFullAddress(),
					orderInput.getContactNumber(),
					orderInput.getAlternateContactNumber(),
					ORDER_PLACED,
					movieTicket.getActualPrice()*o.getQuantity(),
					movieTicket,
					user
					);
			orderDetailDao.save(orderDetail);
		}
		
	}
}
