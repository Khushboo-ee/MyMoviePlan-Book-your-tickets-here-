package com.simplilearn.capstone2.entity;

import java.util.List;

public class OrderInput {
	
	private String fullName;
	private String fullAddress;
	private String contactNumber;
	private String alternateContactNumber;
	private List<OrderTicketQuantity> orderTicketQuantity;
	private String transactionId;
	
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getFullAddress() {
		return fullAddress;
	}
	public void setFullAddress(String fullAddress) {
		this.fullAddress = fullAddress;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getAlternateContactNumber() {
		return alternateContactNumber;
	}
	public void setAlternateContactNumber(String alternateContactNumber) {
		this.alternateContactNumber = alternateContactNumber;
	}
	public List<OrderTicketQuantity> getOrderTicketQuantity() {
		return orderTicketQuantity;
	}
	public void setOrderTicketQuantity(List<OrderTicketQuantity> orderTicketQuantity) {
		this.orderTicketQuantity = orderTicketQuantity;
	}
	

}
