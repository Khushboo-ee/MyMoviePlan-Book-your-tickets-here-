package com.simplilearn.capstone2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.capstone2.entity.Cart;
import com.simplilearn.capstone2.service.CartService;

@RestController
public class CartController {
	@Autowired
	private CartService cartService;
	
	@PreAuthorize("hasRole('User')")
	@GetMapping({"/addToCart/{ticketId}"})
	public Cart addToCart(@PathVariable(name="ticketId")Integer ticketId) {
		return cartService.addToCart(ticketId);
	}
	@PreAuthorize("hasRole('User')")
	@DeleteMapping({"/deleteCartItem/{cartId}"})
	public void deleteCartItem(@PathVariable (name="cartId")Integer cartId) {
		cartService.deleteCartItem(cartId);
	}
	
	@PreAuthorize("hasRole('User')")
	@GetMapping({"/getCartDetails"})
	public List<Cart> getCartDetails() {
		return cartService.getCartDetails();
		
	}

}
