package com.simplilearn.capstone2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="movie_poster")
public class Posters {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long posterId;
	private String name;
	private String type;
	@Column(length = 5000000)
	private byte[] pic;
	public Posters(String name, String type, byte[] pic) {
		super();
		this.name = name;
		this.type = type;
		this.pic = pic;
	}
	public Posters() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public long getPosterId() {
		return posterId;
	}
	public void setPosterId(long posterId) {
		this.posterId = posterId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public byte[] getPic() {
		return pic;
	}
	public void setPic(byte[] pic) {
		this.pic = pic;
	}
	
	

}
