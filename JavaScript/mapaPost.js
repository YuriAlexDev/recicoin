
const loc = document.querySelector(".location");

const urlFav = "http://localhost:8080/favoritos/post"
loc.addEventListener('submit', event=>{
    event.preventDefault();
 
    const nome = document.querySelector(".nome")

   

    const data = {
        nome: "Centro de Reciclagem Alpha",
        endereco: " Av. Imaginária, 456, Bairro B, Cidade B",
        horario: "07:00 - 17:00, Todos os Dias",
        preco: "Papel - R$0.10/Kg, Papelão - R$0.15/Kg, Garrafas PET - R$0.25/Kg, Vidro - R$0.20/Kg, Latas - R$0.50"
    }

    fetch(urlFav, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)



    });

});