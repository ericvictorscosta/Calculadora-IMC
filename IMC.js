var peso;
var altura;
var imc;
var resultado;

function calcular(){

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso/(altura*altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Seu resultado foi: '+ imc.toFixed(2) + '<h3><br/>Muito abaixo do Peso!!</h3>';
        return false;
    }else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Seu resultado foi: '+ imc.toFixed(2) + '<h3><br/>Abaixo do Peso!!</h3>';
        return false;
    }else if(imc > 18.5 && 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Seu resultado foi: '+ imc.toFixed(2) + '<h3><br/>Peso Normal!!</h3>';
        return false;
    }else if(imc > 25 && imc < 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Seu resultado foi: '+ imc.toFixed(2) + '<h3><br/>Acima do Peso!!</h3>';
        return false;
    }
}