const botao = document.querySelector('button');
const imagem = document.querySelector('#primeira');
const condicao = document.querySelector('#status');
const especie = document.querySelector('#especie');
const nome = document.querySelector('#nome');

geradorAleatorio1 = () => {
    return Math.floor(Math.random() * 671);
}

buscarPersonagens1 = () => {
    let personagem1 = geradorAleatorio1();
    return fetch(`https://rickandmortyapi.com/api/character/${personagem1}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nome.innerHTML = data.name;
        especie.innerHTML = traduzirEspecie(data);
        condicao.innerHTML = traduzirCondicao(data);
    });
}

const condicao2 = document.querySelector('#status2');
const especie2 = document.querySelector('#especie2');
const nome2 = document.querySelector('#nome2');
const imagem2 = document.querySelector('#segunda');

geradorAleatorio2 = () => {
    return Math.floor(Math.random() * 671);
}

buscarPersonagens2 = () => {
    let personagem2 = geradorAleatorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${personagem2}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nome2.innerHTML = data.name;
        especie2.innerHTML = traduzirEspecie(data);
        condicao2.innerHTML = traduzirCondicao(data);
    });
}

const condicao3 = document.querySelector('#status3');
const especie3 = document.querySelector('#especie3');
const nome3 = document.querySelector('#nome3');
const imagem3 = document.querySelector('#terceira');

geradorAleatorio3 = () => {
    return Math.floor(Math.random() * 671);
}

buscarPersonagens3 = () => {
    let personagem3 = geradorAleatorio3();
    return fetch(`https://rickandmortyapi.com/api/character/${personagem3}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nome3.innerHTML = data.name;
        especie3.innerHTML = traduzirEspecie(data);
        condicao3.innerHTML = traduzirCondicao(data);
    });
}

personagens = () => {
    buscarPersonagens1();
    buscarPersonagens2();
    buscarPersonagens3();
}

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return ' Puxa, não sabemos';
    }else if(data.status == 'Alive'){
        return ' Está sim';
    }else {
        return ' Não. Mortinho da Silva';
    } 
}

traduzirEspecie = (data) => {
    if(data.species == 'unknown'){
        return 'Desconhecida';
    } else if(data.species !== 'unknown'){
        return (data.species);
    }
}

botao.onclick = personagens;