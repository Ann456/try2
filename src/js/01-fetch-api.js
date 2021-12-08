// import '../css/common.css'
import pokemonCardTpl from '../templates/pokemon-card'
import API from '../js/api-service'

const cardContainer = document.querySelector('.js-card-container');

const searchForm = document.querySelector(`.js-search-form`);
searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    
    const form = e.currentTarget;
    //console.log(form.elements);
    const searchQuery = form.elements.query.value;//ccылка на value input

    API.fetchPokemon(searchQuery)//фетч
    .then(renderPocemonCard)//обработка хорошего результата
    .catch(onFetchError)//обработка плохо результата
    .finally(() => form.reset());//очистка формы
}

function renderPocemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
    cardContainer.innerHTML = markup;
}
    
function onFetchError(error) {
    alert('Ошибка');
}
//-----------------
fetch('https://pokeapi.co/api/v2/pokemon?limit=20')//забирает только 10 покемонов
    .then(r => r.json())
    .then(console.log);

//pokemon ? limit = 100 & offset=200

// const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=02f153d5a9864db08f32e80b4432edc8'
// const options = {
//     headers: {
//         'X-Api-Key': '02f153d5a9864db08f32e80b4432edc8',
//     },
// };

// fetch('https://newsapi.org/v2/everything?q=cats&language=en&pageSize=5', options)
//     .then(r => r.json())
//     .then(console.log);
// //-------------------

