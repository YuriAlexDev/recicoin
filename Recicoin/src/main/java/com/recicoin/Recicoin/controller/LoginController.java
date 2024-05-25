package com.recicoin.Recicoin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.recicoin.Recicoin.models.Login;
import com.recicoin.Recicoin.repository.LoginRepository;

@RestController
@CrossOrigin(origins = "*") // Tira o erro CORS
@RequestMapping("/login")
public class LoginController {
	@Autowired
	private LoginRepository loginrepository;
	
	@Autowired
	private PasswordEncoder encoder;
	
	
	@GetMapping("/get")// Metodo http GET
	public List<Login> listar(){
		
		return loginrepository.findAll();
		
	}
	
	@PostMapping("/post") //Metodo http POST 
	@CrossOrigin(origins = "*") // Tira o erro CORS
	@ResponseStatus(HttpStatus.CREATED)
	public Login adcionar (@RequestBody Login login) {
		
		login.setPassword(encoder.encode(login.getPassword()));
		return loginrepository.save(login);
		
	}
	
	@PostMapping("/validarSenha")
	public ResponseEntity<Boolean> validarSenha (@RequestParam String email,
												@RequestParam String password){
		
		
		Optional<Login> optEmail = loginrepository.findByEmail(email);
		
		if(optEmail.isEmpty()) {
			
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
		}
		
		boolean valid = false;
		
		Login login = optEmail.get();
		
		valid = encoder.matches(password, login.getPassword());
		
		HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
		
		return ResponseEntity.status(status).body(valid);
		
		
	}

}
