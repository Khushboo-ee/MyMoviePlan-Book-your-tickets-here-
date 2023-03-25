package com.simplilearn.capstone2.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer cartId;
	@OneToOne
	private MovieTickets movieTicket;
	@OneToOne
	private User user;
	
	
	
	public Cart() {
		
	}
		
	public Cart(MovieTickets movieTicket, User user) {
		super();
		this.movieTicket = movieTicket;
		this.user = user;
	}
	public Integer getCartId() {
		return cartId;
	}
	public void setCartId(Integer cartId) {
		this.cartId = cartId;
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
	
	
}
