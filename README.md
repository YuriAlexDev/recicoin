

![Png_Recicoin](https://github.com/YuriAlexDev/recicoin/assets/121642406/51d76f2b-2c04-45dc-b657-6b25a8cc355e)



# SOBRE
 O recicoin é plataforma que localiza os centros de reciclagem mais próximos e informa o preço sobre materias recicláveis.

### Por que criamos?

Segundo o Anuário da Reciclagem 2022, feito pelo Instituto Pragma, em média, são 32 catadoras e catadores de materiais recicláveis por cooperativa/associação, considerando uma amostragem de 306 organizações pesquisadas em todo o país, e um total de 9.854 profissionais. Com isso vimos uma oportunidade nesse mercado.



# TECNOLOGIAS USADAS
HTML

CSS

JAVASCRIPT

JAVA/SPRINGBOOT


# ETAPAS DE INSTALAÇÃO 

1.Faça dowload pelo GITHUB.

2.Importe o arquivo .jar pelo sua IDE usual.

3.Suba nosso código para seu localhost:8080


# NOSSOS ENDPOINTS
   ## GET /login/get - Mostra todos os logins feito no DB

  
        [
    {
        "id": 1,
        "name": "joao",
        "email": "email@gmail.com",
        "password": "$2a$10$WOCHn9jnBNivzbTncPR7p.dSbxtvA8x4acHJACtZao2IVejX5pfOW",
        "cpf": "123566",
        "birthday": "16/04/2003"
    }
        ]



   ## POST /login/post - Faz post de um login específico

        {
    "name" : "joao",
    "email" : "email@gmail.com",
    "password" : 1234,
    "cpf": "123566",
    "birthday" : "16/04/2003"
}

   ## POST /login/validarSenha?email=emaildousuario@gmail.com&password=1234 - Valida se email do usário está no DB

   ### Se houver registro no DB

        true


### Se não houver registro no DB

        false
   ## GET /favoritos/get - Mostra quais centros de reciclagem o usuário favoritou
    [
    {
        "id": 1,
        "nome": "Centro Alpha",
        "endereco": " Av. Imaginária, 456, Bairro B, Cidade kkk",
        "horario": "07:00 - 17:00, Todos os Dias",
        "preco": "Papel - R$0.10/Kg, Papelão - R$0.15/Kg, Garrafas PET - R$0.25/Kg, Vidro - R$0.20/Kg, Latas - R$0.50"
    }
]
   ## POST /favoritos/post - Faz post dos centros favoritados

        {
        "id": 1,
        "nome": "Centro Alpha",
        "endereco": " Av. Imaginária, 456, Bairro B, Cidade kkk",
        "horario": "07:00 - 17:00, Todos os Dias",
        "preco": "Papel - R$0.10/Kg, Papelão - R$0.15/Kg, Garrafas PET - R$0.25/Kg, Vidro - R$0.20/Kg, Latas - R$0.50"
        }   

   ## DELETE /favoritos/delete/{ID} - Deleta os centros favoritados

    200 OK

   ## GET  /favoritos/get/[ID] - Exibe os centros pelo seu ID

    {
    "id": 1,
    "nome": "Centro Alpha",
    "endereco": " Av. Imaginária, 456, Bairro B, Cidade kkk",
    "horario": "07:00 - 17:00, Todos os Dias",
    "preco": "Papel - R$0.10/Kg, Papelão - R$0.15/Kg, Garrafas PET - R$0.25/Kg, Vidro - R$0.20/Kg, Latas -      R$0.50"
}




