import { HITSPERPAGE, PAGES_UPPER_LIMIT } from '../js/discoveryapi';

const pagesContainer = document.querySelector('.pages');

const generatePagination = (currentPage, totalCount) => {
  const maxPages = Math.ceil(totalCount / HITSPERPAGE);
  const highestPage = Math.min(maxPages, PAGES_UPPER_LIMIT);

  let pages = [];

  if (highestPage <= 8) {
    // Afișează toate paginile dacă sunt 8 sau mai puține
    pages = Array.from({ length: highestPage }, (_, i) => i + 1);
  } else if (currentPage > 4 && currentPage < highestPage - 3) {
    // Afișează paginile din mijloc
    pages = [1, '...'];
    pages.push(
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2
    );
    pages.push('...', highestPage);
  } else if (currentPage >= highestPage - 3) {
    // Afișează ultimele pagini fără să depășească pagina maximă
    pages = [1, '...'];
    for (let i = highestPage - 4; i <= highestPage; i++) {
      if (i > 1) {
        pages.push(i);
      }
    }
  } else {
    // Afișează primele pagini și ultimele pagini
    pages = [1, 2, 3, 4, 5, '...', highestPage];
  }

  // Generarea markup-ului
  let markup = '';
  for (let i = 0; i < pages.length; i++) {
    if (typeof pages[i] === 'number') {
      markup += `<li data-page="${pages[i]}" class="page ${
        pages[i] === currentPage ? 'active' : ''
      }">${pages[i]}</li>`;
    } else {
      markup += `<li class="page">${pages[i]}</li>`;
    }
  }

  pagesContainer.innerHTML = markup;
};

export { generatePagination };













