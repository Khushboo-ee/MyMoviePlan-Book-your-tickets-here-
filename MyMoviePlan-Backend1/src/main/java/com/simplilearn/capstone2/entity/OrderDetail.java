package com.simplilearn.capstone2.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class OrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer orderId;
	private String orderFullname;
	private String orderFullAddress;
	private String orderContactNumber;
	private String orderAlternateNumber;
	private String orderStatus;
	private double orderAmount;
	@OneToOne
	private MovieTickets movieTicket;
	@OneToOne
	private User user;
	private String transactionId;
	
	
	
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public OrderDetail() {
		
	}
	public MovieTickets getMovieTicket() {
		return movieTicket;
	}
	public void setMovieTicket(MovieTickets movieTicket) {
		this.movieTicket = movieTicket;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public String getOrderFullname() {
		return orderFullname;
	}
	public void setOrderFullname(String orderFullname) {
		this.orderFullname = orderFullname;
	}
	public String getOrderFullAddress() {
		return orderFullAddress;
	}
	public void setOrderFullAddress(String orderFullAddress) {
		this.orderFullAddress = orderFullAddress;
	}
	public String getOrderContactNumber() {
		return orderContactNumber;
	}
	public void setOrderContactNumber(String orderContactNumber) {
		this.orderContactNumber = orderContactNumber;
	}
	public String getOrderAlternateNumber() {
		return orderAlternateNumber;
	}
	public void setOrderAlternateNumber(String orderAlternateNumber) {
		this.orderAlternateNumber = orderAlternateNumber;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public double getOrderAmount() {
		return orderAmount;
	}
	public void setOrderAmount(double orderAmount) {
		this.orderAmount = orderAmount;
	}
	public OrderDetail( String orderFullname, String orderFullAddress, String orderContactNumber,
			String orderAlternateNumber, String orderStatus, double orderAmount, MovieTickets movieTicket, User user,
			String transactionId) {
		super();
		
		this.orderFullname = orderFullname;
		this.orderFullAddress = orderFullAddress;
		this.orderContactNumber = orderContactNumber;
		this.orderAlternateNumber = orderAlternateNumber;
		this.orderStatus = orderStatus;
		this.orderAmount = orderAmount;
		this.movieTicket = movieTicket;
		this.user = user;
		this.transactionId = transactionId;
	}
	
	
	
	

}
