const content = document.querySelector(".content");

const url = "http://localhost:8080/login/get"

async function getName(){

    const reponse =  await fetch(url);

    console.log(reponse);

    const data = await reponse.json();
    
    console.log(data);


    data.map((post) =>{


        content.innerHTML = post.name



    })

}

getName();




