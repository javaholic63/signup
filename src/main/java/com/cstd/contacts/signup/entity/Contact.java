package com.cstd.contacts.signup.entity;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Proxy;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;


@Data
@Proxy
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(Include.USE_DEFAULTS)
@Entity
@Table(name = "contact")
public class Contact {

		
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Long contactId;

	@Column(name = "first_name", unique = false, nullable = false, length = 100)
	private  String firstName;
	
	@Column(name = "last_name", unique = false, nullable = false, length = 100)
	private  String lastName;
	
	@Column(name = "email", unique = false, nullable = false, length = 50)
	private  String email;	
	
	@Column(name = "phone", unique = false, nullable = false, length = 50)
	private  String phone;
	
	@Column(name = "age", unique = false, nullable = true, length = 50)
	private  String age;
	
	@Column(name = "community", unique = false, nullable = true, length = 50)
	private  String community;
	
	@Column(name = "subscribed_on")
	private Date subscribedOn;
	
	@LastModifiedDate
    @Temporal(value=TemporalType.TIMESTAMP)
    protected Date lastModifiedDate;
	
		

}
