const url = "http://localhost:8080/login/post"
const name = document.getElementById("#nome").values

    const newUser = {

        name: "Teste",
        email : "email@.com",
        password: "1234",
        cpf: "12345678912",
        birthday: "16/04/2003"
    }
    async function postNewUser(){
    
        const reponse =  await fetch('http://localhost:8080/login/post', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
    
        //console.log(reponse);
    
        const data = await reponse.json();
        
       // console.log(data);
    
    
    
    
    }
    
    postNewUser();
    




