package com.recicoin.Recicoin.controller;

import com.recicoin.Recicoin.models.Avaliacoes;
import com.recicoin.Recicoin.services.AvaliacoesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacoesController {

    @Autowired
    private AvaliacoesServices avaliacoesServices;

    @PostMapping
    public ResponseEntity<Avaliacoes> adicionarAvaliacao(@RequestBody Avaliacoes avaliacao) {
        Avaliacoes novaAvaliacao = avaliacoesServices.salvarAvaliacao(avaliacao);
        return ResponseEntity.ok(novaAvaliacao);
    }

    @GetMapping("/centro/{centroId}")
    public ResponseEntity<List<Avaliacoes>> obterAvaliacoesPorCentro(@PathVariable Long centroId) {
        List<Avaliacoes> avaliacoes = avaliacoesServices.obterAvaliacoesPorCentro(centroId);
        return ResponseEntity.ok(avaliacoes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerAvaliacao(@PathVariable Long id) {
        avaliacoesServices.removerAvaliacao(id);
        return ResponseEntity.noContent().build();
    }
}

	

