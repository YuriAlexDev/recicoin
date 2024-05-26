document.getElementById('avaliacao-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var rating = document.getElementById('rating').value;
    var comentario = document.getElementById('comentario').value;
    enviarAvaliacao({ rating: rating, comentario: comentario });
  });

  function enviarAvaliacao(avaliacao) {
    fetch('http://localhost:8080/avaliacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(avaliacao)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao enviar avaliação');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('mensagem').textContent = 'Avaliação enviada com sucesso!';
    })
    .catch(error => {
      document.getElementById('mensagem').textContent = 'Erro ao enviar avaliação. Por favor, tente novamente.';
    });
  }
