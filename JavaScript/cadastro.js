const url = "http://localhost:8080/login/post"

const formElement = document.querySelector('.form');

   
formElement.addEventListener('submit', event=>{
    event.preventDefault();


    const formData = new FormData(formElement);

    const data = Object.fromEntries(formData);

    fetch(url, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)



    });

});









  
    




