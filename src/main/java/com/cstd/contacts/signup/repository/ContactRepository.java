package com.cstd.contacts.signup.repository;

import org.springframework.data.repository.CrudRepository;

import com.cstd.contacts.signup.entity.Contact;

public interface ContactRepository extends CrudRepository<Contact, Long> {

}
