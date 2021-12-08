const BASE_URL = 'https://pokeapi.co/api/v2'
function fetchPokemon(pokemonId) {

    return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response => {
            //console.log(response);//вызывает прототип response в котором нам надо методы blob() для картинок и видео и аудео, text()для получения csv табличных данных или текста, json()
            //console.log(response.json());
            return response.json();//функция сходила на сервер взяла данные и распарсила их
        });
}

export default { fetchPokemon };