//Selecione os elementos do DOM que serão manipulados 
const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

//Adicione um evento de clique no botão
    botao.addEventListener("click",() => {
        //solicita o nome do usuário
        let nome =prompt("Qual é o seu nome?");

    //condição  para verificar se o nome foi fornecido
    if (nome) {
        //solicitar a idade do usuário
        let idade= prompt("Qual a sua idade?");

        //Condiçã para erfificar se a idade é um numero válido
        if (isNaN(idade) || idade <=0){
            mensagem.innerText= "Por FAvor, inisra um número válido.";
            mensagem.style.color = "red"; //Altere a cor do texto para vermelho

        }else{
            //Saida de dados com base na idade fornecida
            if(idade<18){
                mensagem.innerText = `Olá, ${nome}! Você tem apenas ${idade} anos.`;
                mensagem.style.color = "blue";  // Altera a cor do texto para azul

            } else {
                mensagem.innerText = `Olá, ${nome}! Você é maior de idade com ${idade} anos.`;
                mensagem.style.color = "green";  // Aaltera a cor do texto para verde
            }
            console.log(`Nome do usuário: ${nome}`);
            console.log(`Idade do usuário: ${idade}`);
        }
    } else {
        mensagem.innerText = "Nome não fornecido. Por favor, insira um nome.";
        mensagem.style.color = "orange";  // Altera a cor do texto para laranja
    }
    });