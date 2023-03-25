package com.simplilearn.capstone2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.capstone2.entity.OrderDetail;
import com.simplilearn.capstone2.entity.OrderInput;
import com.simplilearn.capstone2.entity.TransactionDetails;
import com.simplilearn.capstone2.service.OrderDetailService;

@RestController
public class OrderDetailController {

	@Autowired
	private OrderDetailService orderDetailService;
	
	@PreAuthorize("hasRole('User')")
	@PostMapping({"/place/order/{isSingleTicketCheckout}"})
	public void placeOrder(@PathVariable (name="isSingleTicketCheckout") boolean isSingleTicketCheckout,
			@RequestBody OrderInput orderInput) {
		orderDetailService.placeOrder(orderInput,isSingleTicketCheckout);
		
	}
	
	@PreAuthorize("hasRole('User')")
	@GetMapping({"/getOrderDetails"})
	public List<OrderDetail> getOrderDetails() {
		return orderDetailService.getOrderDetails();
	}
	
	@PreAuthorize("hasRole('Admin')")
	@GetMapping({"/getAllOrderDetails/{status}"})
	public List<OrderDetail> getAllOrderDetails(@PathVariable(name = "status")String status){
		return orderDetailService.getAllOrderDetails(status);
	}
	
	@PreAuthorize("hasRole('Admin')")
	@GetMapping({"/markOrderWatched/{orderId}"})
	public void markOrderWatched(@PathVariable(name = "orderId")Integer orderId ) {     
		//this can be used for marked order as delivered in other cases.
		orderDetailService.markOrderAsWatched(orderId);
	}
	
	@PreAuthorize("hasRole('User')")
	@GetMapping({"/createTransaction/{amount}"})
	public TransactionDetails CreateTransaction(@PathVariable(name= "amount")Double amount) {
		return orderDetailService.createTransaction(amount);
	}
	
}
