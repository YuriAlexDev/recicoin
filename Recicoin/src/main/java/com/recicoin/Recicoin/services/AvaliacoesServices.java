package com.recicoin.Recicoin.services;

import com.recicoin.Recicoin.models.Avaliacoes;
import com.recicoin.Recicoin.repository.AvaliacoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class AvaliacoesServices {

    @Autowired
    private AvaliacoesRepository avaliacoesRepository;

    public Avaliacoes salvarAvaliacao(Avaliacoes avaliacao) {
        if (avaliacao.getRating() < 1 || avaliacao.getRating() > 5) {
            throw new IllegalArgumentException("Rating deve estar entre 1 e 5");
        }
        avaliacao.setDataCriacao(LocalDateTime.now());
        return avaliacoesRepository.save(avaliacao);
    }


    

    public void removerAvaliacao(Long id) {
        avaliacoesRepository.deleteById(id);
    }




	public List<Avaliacoes> obterAvaliacoesPorCentro(Long centroId) {
		// TODO Auto-generated method stub
		return null;
	}
}

