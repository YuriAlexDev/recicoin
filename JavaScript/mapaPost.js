
const urlFav = "http://localhost:8080/favoritos/post"

const loc = document.querySelector(".location");

loc.addEventListener('submit', event=>{
    event.preventDefault();
 
 
   

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

const loc2 = document.querySelector(".location2");

loc2.addEventListener('submit', event=>{
    event.preventDefault();
 
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

const loc3 = document.querySelector(".location3");

loc3.addEventListener('submit', event=>{
    event.preventDefault();
 
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

const loc4 = document.querySelector(".location4");

loc4.addEventListener('submit', event=>{
    event.preventDefault();
 
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