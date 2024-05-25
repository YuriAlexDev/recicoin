package com.recicoin.Recicoin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recicoin.Recicoin.models.Login;

public interface LoginRepository extends JpaRepository <Login, Long>{
	
	public Optional<Login> findByEmail(String login);
}
