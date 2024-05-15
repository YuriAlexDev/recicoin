package com.recicoin.Recicoin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.recicoin.Recicoin.models.Login;
import com.recicoin.Recicoin.repository.LoginRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {
	
	@Autowired 
	private LoginRepository loginrepository;
	
	@GetMapping("/get")
	public List<Login> listar(){
		
		return loginrepository.findAll();
		
	}
	
	@PostMapping("/post")
	@CrossOrigin(origins = "*")
	@ResponseStatus(HttpStatus.CREATED)
	public Login adcionar (@RequestBody Login login) {
		
		return loginrepository.save(login);
		
	}

}
