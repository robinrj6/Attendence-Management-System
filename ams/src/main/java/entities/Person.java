package entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "person")
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "serial")
	private Integer id;
	private String fname;
	private String lname;
	private Long phnumber;
	private Boolean attendence;
	private Date date;
	
	public Person() {
		super();
	}
	
	public Person(Integer id, String fname, String lname, Long phNumber, Boolean attendence, Date date) {
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.phnumber = phNumber;
		this.attendence = attendence;
		this.date = date;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public Long getPhNumber() {
		return phnumber;
	}
	public void setPhNumber(Long phNumber) {
		this.phnumber = phNumber;
	}
	public Boolean getAttendence() {
		return attendence;
	}
	
	public void setAttendence(Boolean attendence) {
		this.attendence = attendence;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	
	
}
