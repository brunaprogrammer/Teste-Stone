let listaDeCompras = [
    {
        item:"mamão", 
        quantidade: 0, 
        preco: 0 
    },
    {
        item:"açúcar", 
        quantidade: 0, 
        preco: 0
    },
    {
        item:"mel", 
        quantidade: 1, 
        preco: 101
    }
];

let listaDeEmails = ["fulano@email.com", "siclano@email.com", "fulana@email.com", "siclana@email.com"];

function calculo (listaDeCompras, listaDeEmails){

    let somaDosValores = 0;
    let divisao = 0;
    let divisaoIgualitaria = [];


    for(let i=0; i<listaDeCompras.length; i++){

        somaDosValores += listaDeCompras[i].preco * listaDeCompras[i].quantidade;

    }

    divisao = somaDosValores / listaDeEmails.length

    let mod = somaDosValores % listaDeEmails.length;

    let resultadoVezesCem = 0;

    let temporario = 0;

    
    resultadoVezesCem = Math.trunc(divisao*100);

    if(mod>0){
        temporario = (somaDosValores * 100) - (resultadoVezesCem * listaDeEmails.length);
    }

    for(let i=0; i<listaDeEmails.length; i++){
        if(temporario>0){
           divisaoIgualitaria.push((resultadoVezesCem+1)/100);
            temporario--;
        } else{
            divisaoIgualitaria.push(resultadoVezesCem/100);
        }
    }
    
    let somatemp = 0;

    for(var j=0; j<divisaoIgualitaria.length; j++){
        somatemp += divisaoIgualitaria[j];
    }

    console.log("somaDosValores",somaDosValores)

    let mapaDicionario = {};

    for(let i=0; i<listaDeEmails.length; i++){
        mapaDicionario[listaDeEmails[i]] = divisaoIgualitaria[i];
    }
    
    return mapaDicionario;
}


calculo(listaDeCompras,listaDeEmails);

