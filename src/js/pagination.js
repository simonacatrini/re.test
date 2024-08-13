import { HITSPERPAGE, PAGES_UPPER_LIMIT } from '../js/discoveryapi';
const pagesContainer = document.querySelector('.pages');
const generatePagination = (currentPage, totalCount) => {
  const maxPages = Math.ceil(totalCount / HITSPERPAGE);
  const highestPage = Math.min(maxPages, PAGES_UPPER_LIMIT);
  let pages = [];
  if (highestPage <= 8) {
    pages = Array.from({ length: highestPage }, (_, i) => i + 1);
  } else if (currentPage > 3 && currentPage < highestPage - 2) {
    pages = [1];
    if (currentPage > 4) {
      pages.push('...');
    }
    pages.push(
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2
    );
    if (currentPage + 2 < highestPage - 1) {
      pages.push('...');
    }
    pages.push(highestPage);
  } else if (currentPage >= highestPage - 2) {
    pages = [1];
    if (currentPage > 4) {
      pages.push('...');
    }
    for (let i = highestPage - 4; i <= highestPage; i++) {
      if (i > 1) {
        pages.push(i);
      }
    }
  } else {
    pages = [1, 2, 3, 4, '...', highestPage];
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












