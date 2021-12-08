/*
 * - Пагинация
 *   - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

import NewsApiService from './news-service';//создали класс по fetch
import LoadMoreBtn from './components/load-more-btn';//создали класс по загрузке

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};
const loadMoreBtn = new LoadMoreBtn({//экземпляр класса по загрузке
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newsApiService = new NewsApiService();//экземпляр класса по fetch для получения обьекта с методами и свойствами

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    return alert('Введите что-то нормальное');
  }

  loadMoreBtn.show();
  newsApiService.resetPage();
  clearArticlesContainer();
  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  const markup = articles
    .map(
      ({ url, urlToImage, title, author, description }) => `
  <li>
    <a href="${url}" target="_blank" rel="noopener noreferrer">
      <article>
        <img src="${urlToImage}" alt="" width="480">
        <h2>${title}</h2>
        <p>Posted by: ${author}</p>
        <p>${description}</p>
      </article>
    </a>
  </li>`
    )
    .join('');

  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
