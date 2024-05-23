package com.recicoin.Recicoin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.recicoin.Recicoin.models.Favoritos;
import com.recicoin.Recicoin.repository.FavoritosRepository;

@RestController	
@CrossOrigin(origins = "*")
@RequestMapping("/favoritos")
public class FavoritosController {
	
	@Autowired
	private FavoritosRepository favoritosrepository;
	
	@GetMapping("/get")
	public List<Favoritos> listar(){
		
		return favoritosrepository.findAll();
		
	}
	
	@GetMapping("/get/{id}")
	public Optional<Favoritos> listarID(@PathVariable Long id){
		
		return favoritosrepository.findById(id);
	}
	
	
	@PostMapping("/post")
	@CrossOrigin(origins = "*")
	@ResponseStatus(HttpStatus.CREATED)
	public Favoritos adcionar(@RequestBody Favoritos favoritos) {
		
		return favoritosrepository.save(favoritos);
		
	}
	
	
	@DeleteMapping("delete/{id}")
	@CrossOrigin(origins = "*")
	public void delete(@PathVariable Long id) {
		
		 favoritosrepository.deleteById(id);
		
	}


}
