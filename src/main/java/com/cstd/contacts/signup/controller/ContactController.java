package com.cstd.contacts.signup.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cstd.contacts.signup.entity.Contact;
import com.cstd.contacts.signup.service.ContactService;

import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/api")
public class ContactController {
	
	private ContactService contactService;
	
    @Autowired
    public ContactController(ContactService contactService){
        super();
        this.contactService = contactService;
    }
	
	@PostMapping("/contact")
	public Contact save(@RequestBody Contact contact) {
		this.contactService.save(contact);
		return contact;
	}

}
