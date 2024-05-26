package com.recicoin.Recicoin.repository;

import com.recicoin.Recicoin.models.Avaliacoes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvaliacoesRepository extends JpaRepository<Avaliacoes, Long> {
    List<Avaliacoes> findByCentroId(Long centroId);
}

