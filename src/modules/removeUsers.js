import { render } from "./render";

export const removeUsers = () => {
  const tbody = document.getElementById('table-body');

  tbody.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-remove')) { return; }
    const userId = e.target.closest('tr').dataset.key;
    userService.removeUser(userId).then(() => {
      userService.getUsers().then(users => render(users));
    });
  });
};