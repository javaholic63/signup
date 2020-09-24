package com.cstd.contacts.signup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cstd.contacts.signup.entity.Contact;
import com.cstd.contacts.signup.repository.ContactRepository;


@Service
public class ContactService {


	private ContactRepository contactRepository;

	@Autowired
	public ContactService(ContactRepository contactRepository){
		super();
		this.contactRepository = contactRepository;
	}

	public void save(Contact contact) {
		this.contactRepository.save(contact);		
	}

}
