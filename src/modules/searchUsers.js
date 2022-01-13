import { render } from "./render";
import { debounce } from "./helpers";

export const searchUsers = () => {
  const input = document.getElementById('search-input');

  const debounceSearch = debounce(() => {
    const searchValue = input.value;
    userService.getSearchUsers(searchValue).then(users => render(users));
  }, 500);

  let id;

  input.addEventListener('input', debounceSearch);
};