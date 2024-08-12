import { HITSPERPAGE, PAGES_UPPER_LIMIT } from '../js/discoveryapi';

const pagesContainer = document.querySelector('.pages');

const generatePagination = (currentPage, totalCount) => {
  const maxPages = Math.ceil(totalCount / HITSPERPAGE);
  const highestPage = Math.min(maxPages, PAGES_UPPER_LIMIT);

  let pages = [];

  if (highestPage <= 8) {
    // Dacă numărul maxim de pagini este 8 sau mai puțin, afișează toate paginile.
    pages = Array.from({ length: highestPage }, (_, i) => i + 1);
  } else if (currentPage > 4 && currentPage < highestPage - 3) {
    // Dacă pagina curentă este la mijloc, afișează paginile în jurul acesteia.
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
    // Dacă pagina curentă este aproape de ultima pagină, afișează ultimele pagini.
    pages = [1, '...'];
    for (let i = highestPage - 4; i <= highestPage; i++) {
      pages.push(i);
    }
  } else {
    // Dacă pagina curentă este aproape de început, afișează primele pagini.
    pages = [1, 2, 3, 4, 5, '...', highestPage];
  }

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
