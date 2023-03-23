package com.simplilearn.capstone2.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class MovieTickets {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ticketId;
	private String movieName;
	private String genre;
	private String actors;
	private String director;
	private String language;
	private String description;
	private double actualPrice;
	private double discountedPrice;
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "ticket_posters", joinColumns = { @JoinColumn(name = "ticket_id") }, inverseJoinColumns = {
			@JoinColumn(name = "poster_id") })
	private Set<Posters> moviePoster;
	
	
	
	public Set<Posters> getMoviePoster() {
		return moviePoster;
	}

	public void setMoviePoster(Set<Posters> moviePoster) {
		this.moviePoster = moviePoster;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getActors() {
		return actors;
	}

	public void setActors(String actors) {
		this.actors = actors;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getActualPrice() {
		return actualPrice;
	}

	public void setActualPrice(double actualPrice) {
		this.actualPrice = actualPrice;
	}

	public double getDiscountedPrice() {
		return discountedPrice;
	}

	public void setDiscountedPrice(double discountedPrice) {
		this.discountedPrice = discountedPrice;
	}

	public MovieTickets(int ticketId, String movieName, String genre, String actors, String director,
			String description, String language, double actualPrice, double discountedPrice) {
		super();
		this.ticketId = ticketId;
		this.movieName = movieName;
		this.genre = genre;
		this.actors = actors;
		this.director = director;
		this.language = language;
		this.description = description;
		this.actualPrice = actualPrice;
		this.discountedPrice = discountedPrice;
	}

	public MovieTickets() {
		super();
		// TODO Auto-generated constructor stub
	}

}
