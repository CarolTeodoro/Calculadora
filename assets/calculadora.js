function calculadora(){
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
    if(!operacao || operacao >= 7){
        alert("Operação Inválida");
        calculadora()
    }else{

    
    let n1 = Number(prompt('Insira o Primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    if(!n1 || !n2){
        alert('Erro - Parametros Inválidos');
        calculadora()
    }else{
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaoperacao();
        }
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaoperacao();
        }
    
        function mutiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaoperacao();
        }
    
        function divicaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaoperacao();
        }
    
        function divicaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e  ${n2} é igual a ${resultado}`);
            novaoperacao();
        }
    
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} Elevado a ${n2}ª é igual a ${resultado}`);
            novaoperacao();
        }
    
        function novaoperacao(){
            let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não');
            if(opcao ==1){
                calculadora()
            }else if(opcao == 2){
                alert('Até Mais')
            } else{
                alert('Digite uma opção Válida!')
                novaoperacao()
            }
        }
    
        if(operacao == 1){
            soma() 
        } else if( operacao == 2){
            subtracao()
        } else if( operacao == 3){
        mutiplicacao()
        }else if( operacao == 4){
        divicaoReal()
        }else if( operacao == 5){
        divicaoInteira()
        }else if( operacao == 6){
        potenciacao()
        }
    
        }

    }

};

calculadora();