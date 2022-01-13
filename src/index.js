import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";
import { UserService } from './modules/userService';

window.userService = new UserService();

userService.getUsers().then(data => {
  render(data);
});

addUsers();
removeUsers();
changePermissions();
editUsers();
filterUsers();
sortUsers();
searchUsers();
