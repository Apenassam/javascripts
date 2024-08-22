const calcular = document.getElementById('calcular');




function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
    
        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabens!!';
        }else if (valorIMC < 30) {
            classificacao = 'Levimente acima do peso';
        }else if (valorIMC < 35) {
            classificacao = 'Está com obesidade Grau I!!';
        }else if (valorIMC < 40) {
            classificacao = 'Está com obesidade Grau II!!';
        }else {
            classificacao = 'Está com obesidade Grau III, Cuidado!!';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

      
    } else {
        resultado.textContent = 'Preencha os Campos'
    }

}
    calcular.addEventListener('click', imc);




