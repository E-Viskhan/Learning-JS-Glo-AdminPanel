import { render } from "./render";

export const changePermissions = () => {
  const tbody = document.getElementById('table-body');

  tbody.addEventListener('click', (e) => {
    if (!e.target.closest('input[type=checkbox]')) { return; }

    const tr = e.target.closest('tr');
    const userId = tr.dataset.key;
    const input = tr.querySelector('input[type=checkbox]');

    userService.changeUser(userId, { permissions: input.checked })
      .then(() => {
        userService.getUsers().then(users => render(users));
      });
  });
};