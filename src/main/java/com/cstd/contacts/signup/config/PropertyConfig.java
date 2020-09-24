package com.cstd.contacts.signup.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

@Configuration
@PropertySource(value="classpath:application.properties")
public class PropertyConfig {
	
	@Autowired
	private Environment environment;
	
	public String getString(String key) {
		return environment.getProperty(key);
	}
	
	public String getString(String key, String defaultValue) {
		return environment.getProperty(key, defaultValue);
	}
	
	public Integer getInteger(String key) {
		return Integer.valueOf(key);
	}
	
	public Integer getInteger(String key, Integer defaultValue) {
		return Integer.valueOf(environment.getProperty(key, defaultValue.toString()));
	}

}
