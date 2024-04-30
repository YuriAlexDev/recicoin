//SLIDE BOX
$(function(){
    

    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {

        $('.bxCarrosel').bxSlider({
        
            mode: 'horizontal',
            swipeThreshold:true,
            touchEnabled: true,
            oneToOneTouch: true,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            auto: true,
            controls:true,
            infiniteLoop: true,
            autoHover:true,
            slideWidth:300,
            slideMargin:20,
            responsive:true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            shrinkItems:true,
            speed:1200
      
        });
    
    }else{   
       
        $('.bxCarrosel').bxSlider({
        
            mode: 'horizontal',
            swipeThreshold:true,
            touchEnabled: false,
            oneToOneTouch: false,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            auto: true,
            controls:true,
            infiniteLoop: true,
            autoHover:true,
            slideWidth:500,
            slideMargin:40,
            responsive:true,
            minSlides: 1,
            maxSlides: 2,
            moveSlides: 1,
            shrinkItems:true,
            speed:1200
      
        });

    }  
   
   
function calcularValor() {
    const valorPorKg = parseFloat(document.getElementById('material').value);
    let quantidadeGramas = parseFloat(document.getElementById('quantidade').value);

    if (!valorPorKg || quantidadeGramas <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let quantidadeKg = quantidadeGramas / 1000; // Convertendo gramas para quilogramas
    let valorTotal = quantidadeKg * valorPorKg;

    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').textContent = `Valor a receber: R$ ${valorTotal.toFixed(2)}`;
}

}); 


