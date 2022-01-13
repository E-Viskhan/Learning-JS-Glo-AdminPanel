import { render } from "./render";

export const sortUsers = () => {
  const headerSortIsChildren = document.getElementById('sort-is-children');

  let isSort = false;

  headerSortIsChildren.addEventListener('click', () => {
    const sortOption = 'children';
    let order = isSort ? 'desc' : 'asc';

    userService.getSortUsers({ sortOptionName: sortOption, order })
      .then(users => render(users));

    isSort = !isSort;
  });
};