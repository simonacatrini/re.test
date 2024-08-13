 import { HITSPERPAGE, PAGES_UPPER_LIMIT } from '../js/discoveryapi';
const pagesContainer = document.querySelector('.pages');
const generatePagination = (currentPage, totalCount) => {
  const maxPages = Math.ceil(totalCount / HITSPERPAGE);
  const highestPage = Math.min(maxPages, PAGES_UPPER_LIMIT);
  let pages = [];
  if (highestPage <= 8) {
    pages = Array.from({ length: highestPage }, (_, i) => i + 1);
  } else {
    if (currentPage <= 4) {
      pages = [1, 2, 3, 4, 5, '...', highestPage];
    } else if (currentPage >= highestPage - 3) {
      pages = [1, '...', highestPage - 4, highestPage - 3, highestPage - 2, highestPage - 1, highestPage];
    } else {
      pages = [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        highestPage
      ];
    }
  }
  let markup = '';
  for (let i = 0; i < pages.length; i++) {
    markup += `<li data-page="${pages[i]}" class="page ${
      pages[i] == currentPage ? 'active' : ''
    }">${pages[i]}</li>`;
  }
  pagesContainer.innerHTML = markup;
};
export { generatePagination };




































