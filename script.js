const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nome = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const status = document.querySelector('#status');


capturarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET',
        headers:{
            Accept:'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
    });
}

botao.onclick = capturarPersonagem;