package com.simplilearn.capstone2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.capstone2.configuration.JwtRequestFilter;
import com.simplilearn.capstone2.dao.CartDao;
import com.simplilearn.capstone2.dao.MovieTicketDao;
import com.simplilearn.capstone2.dao.UserDao;
import com.simplilearn.capstone2.entity.Cart;
import com.simplilearn.capstone2.entity.MovieTickets;
import com.simplilearn.capstone2.entity.User;

@Service
public class CartService {
	@Autowired
	private CartDao cartDao;
	
	@Autowired
	private MovieTicketDao mtDao;
	
	@Autowired
	private UserDao userDao;
	
	public void deleteCartItem(Integer cartId){
		cartDao.deleteById(cartId);
	}
	
	public Cart addToCart(Integer ticketId) {
	 MovieTickets movieTicket =	mtDao.findById(ticketId).get();
	 
	 String username = JwtRequestFilter.CURRENT_USER;
	 
	 User user = null;
	 
	 if(username != null) {
		user = userDao.findById(username).get();
	 }
	 
	 if(movieTicket != null && user != null ) {
		 Cart cart = new Cart(movieTicket, user);
		 return cartDao.save(cart);
	 }
	return null;
	}
	
	public List<Cart> getCartDetails(){
		String username = JwtRequestFilter.CURRENT_USER;
		User user = userDao.findById(username).get();
		return cartDao.findByUser(user);
	}

}
