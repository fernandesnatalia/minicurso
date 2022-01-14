const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nome = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Puxa, não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Mortinho da Silva';
    } 
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

capturarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nome.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
}

botao.onclick = capturarPersonagem;