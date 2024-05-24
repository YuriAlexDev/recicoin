
for(var j = 1; j<=4; j++){
const url = `http://localhost:8080/favoritos/get/${j}`,control = j

const loc = document.getElementById(`location${j}`);

loc.style.display = "none";

switch(j){

case 1:
async function getFav1(){
   
    const nome1 = document.querySelector(".nome1");
    const endereco1 = document.querySelector(".endereco1");
    const horario1 = document.querySelector(".horario1");
    const preco1 = document.querySelector(".preco1");

    
    const reponse =  await fetch(url);

    console.log(reponse);
    console.log(typeof(reponse))

    const data = await reponse.json();

    if(data != null){
        loc.style.display = "block"
    }
    
    console.log(data);
    console.log(typeof(data))

    const result = Object.entries(data)

    console.log(result)
    

        nome1.innerHTML = result[1][1]
        endereco1.innerHTML = result[2][1]
        horario1.innerHTML = result[3][1]
        preco1.innerHTML = result[4][1]

        

        loc.addEventListener("submit", event =>{

            event.preventDefault();
         
            const urlDelete = `http://localhost:8080/favoritos/delete/${control}`
        
            const options = {
                method: "DELETE"
            }
        
            fetch(urlDelete, options)
            .then(reponse => console.log(reponse.status))
        
        });

}

getFav1();
break;


case 2:
async function getFav2(){
    const nome2 = document.querySelector(".nome2");
    const endereco2 = document.querySelector(".endereco2");
    const horario2 = document.querySelector(".horario2");
    const preco2 = document.querySelector(".preco2");



    const reponse =  await fetch(url);

    console.log(reponse);
    console.log(typeof(reponse))

    const data = await reponse.json();

    if(data != null){
        loc.style.display = "block"
    }
    
    console.log(data);
    console.log(typeof(data))

    const result = Object.entries(data)

    console.log(result)
    

        nome2.innerHTML = result[1][1]
        endereco2.innerHTML = result[2][1]
        horario2.innerHTML = result[3][1]
        preco2.innerHTML = result[4][1]



        loc.addEventListener("submit", event =>{

            event.preventDefault();
         
            const urlDelete = `http://localhost:8080/favoritos/delete/${control}`
        
            const options = {
                method: "DELETE"
            }
        
            fetch(urlDelete, options)
            .then(reponse => console.log(reponse.status))
        
        });

}

getFav2();
break;


case 3:
async function getFav3(){
    const nome3 = document.querySelector(".nome3");
    const endereco3 = document.querySelector(".endereco3");
    const horario3 = document.querySelector(".horario3");
    const preco3 = document.querySelector(".preco3");


    const reponse =  await fetch(url);

    console.log(reponse);
    console.log(typeof(reponse))

    const data = await reponse.json();

    if(data != null){
        loc.style.display = "block"
    }
    
    console.log(data);
    console.log(typeof(data))

    const result = Object.entries(data)

    console.log(result)
    

        nome3.innerHTML = result[1][1]
        endereco3.innerHTML = result[2][1]
        horario3.innerHTML = result[3][1]
        preco3.innerHTML = result[4][1]



        loc.addEventListener("submit", event =>{

            event.preventDefault();
         
            const urlDelete = `http://localhost:8080/favoritos/delete/${control}`
        
            const options = {
                method: "DELETE"
            }
        
            fetch(urlDelete, options)
            .then(reponse => console.log(reponse.status))
        
        });

}

getFav3();
break;


case 4:
async function getFav4(){
    const nome4 = document.querySelector(".nome4");
    const endereco4 = document.querySelector(".endereco4");
    const horario4 = document.querySelector(".horario4");
    const preco4 = document.querySelector(".preco4");

  
    

    const reponse =  await fetch(url);

    console.log(reponse);
    console.log(typeof(reponse))

    const data = await reponse.json();

    if(data != null){
        loc.style.display = "block"
    }
    
    console.log(data);
    console.log(typeof(data))

    const result = Object.entries(data)

    console.log(result)
    

        nome4.innerHTML = result[1][1]
        endereco4.innerHTML = result[2][1]
        horario4.innerHTML = result[3][1]
        preco4.innerHTML = result[4][1]


        loc.addEventListener("submit", event =>{

            event.preventDefault();
         
            const urlDelete = `http://localhost:8080/favoritos/delete/${control}`
        
            const options = {
                method: "DELETE"
            }
        
            fetch(urlDelete, options)
            .then(reponse => console.log(reponse.status))
        
        });
    

}

getFav4();
break;

}
}



