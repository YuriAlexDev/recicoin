
const urlFav = "http://localhost:8080/favoritos/post"



for(var j = 1 ; j <= 4 ; j++){

const loc = document.querySelector(`.location${j}`)


switch(j){

case 1:

loc.addEventListener('submit', event=>{
    event.preventDefault();
 
 
    alert("Adicionado aos favoritos")

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

break;

case 2:


loc.addEventListener('submit', event=>{
    event.preventDefault();
    
    alert("Adicionado aos favoritos")

    const nome = document.querySelector(".nome")

    
   

    const data = {
        nome: "Estação de Reciclagem Beta",
        endereco: "Av. Imaginária, 456, Bairro B, Cidade B",
        horario: "07:00 - 17:00, Todos os Dias",
        preco: "Papel - R$0.10/Kg, Papelão - R$0.15/Kg, Garrafas PET - R$0.25/Kg, Vidro - R$0.20/Kg, Latas - R$0.50"
    }

    console.log(data)

    fetch(urlFav, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)



    });

});

break;

case 3:


loc.addEventListener('submit', event=>{
    event.preventDefault();

    alert("Adicionado aos favoritos")
 
    const nome = document.querySelector(".nome")

    
   

    const data = {
        nome: "Recicla Cidade Gamma",
        endereco: "Praça Inventada, 789, Bairro C, Cidade C",
        horario: "09:00 - 19:00, Segunda a Sábado",
        preco: "Papel - R$0.10/Kg, Papelão - R$0.15/Kg, Garrafas PET - R$0.25/Kg, Vidro - R$0.20/Kg, Latas - R$0.50"
    }

    console.log(data)

    fetch(urlFav, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)



    });

});

break;

case 4:

loc.addEventListener('submit', event=>{
    event.preventDefault();

    alert("Adicionado aos favoritos")
 
    const nome = document.querySelector(".nome")

    
   

    const data = {
        nome: "Depósito de Reciclagem Delta",
        endereco: "Via Fictícia, 101, Bairro D, Cidade D",
        horario: "06:00 - 16:00, Segunda a Sexta",
        preco: "Papel - R$0.10/Kg, Papelão - R$0.15/Kg, Garrafas PET - R$0.25/Kg, Vidro - R$0.20/Kg, Latas - R$0.50"
    }

    console.log(data)

    fetch(urlFav, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)



    });

});

break;
}
}
