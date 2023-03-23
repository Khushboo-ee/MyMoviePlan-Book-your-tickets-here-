package com.simplilearn.capstone2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.capstone2.dao.MovieTicketDao;
import com.simplilearn.capstone2.entity.MovieTickets;

@Service
public class MovieTicketService {

	@Autowired  //(required=true)
	private MovieTicketDao mtDao;

	public MovieTickets addNewTicket(MovieTickets mt) {
		return mtDao.save(mt); // this saves value in db and return the value saved in db	
	}
	
	public List<MovieTickets> getAllTickets(){
		return (List<MovieTickets>)mtDao.findAll();
	}
	
	public void deleteTicket(Integer ticketId) {
		mtDao.deleteById(ticketId);
	}
	
	public MovieTickets getTicketsById(Integer ticketId) {
		return mtDao.findById(ticketId).get();
	}

	
}
