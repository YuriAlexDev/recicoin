const endereco1 = document.querySelector(".endereco-1");

const url = "http://localhost:8080/favoritos/get/1"

async function getName(){

    const reponse =  await fetch(url);

    console.log(reponse);
    console.log(typeof(reponse))

    const data = await reponse.json();
    
    console.log(data);
    console.log(typeof(data))

    const result = Object.entries(data)

    console.log(result)

        endereco1.innerHTML = result[1][1]



    

}

getName();