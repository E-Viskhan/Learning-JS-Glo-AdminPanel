import { showError } from "./helpers";

export class UserService {
  async getData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Произошла ошибка, данных нет!');
      }
      return await res.json();
    } catch (error) {
      showError(error.message);
    }
  }

  async sendData({ url, data, method = "POST" }) {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error('Произошла ошибка, данных нет!');
      }
    } catch (error) {
      showError(error.message);
    }
  }

  getUsers() {
    return this.getData('http://localhost:4545/users');
  }

  getUser(userId) {
    return this.getData(`http://localhost:4545/users/${userId}`);
  }

  addUser(user) {
    return this.sendData({ url: 'http://localhost:4545/userss', data: user });
  }

  removeUser(userId) {
    return this.sendData({
      url: `http://localhost:4545/users/${userId}`,
      method: 'DELETE'
    });
  }

  changeUser(userId, data) {
    return this.sendData({
      url: `http://localhost:4545/users/${userId}`,
      data,
      method: 'PATCH'
    });
  }

  editUser(userId, user) {
    return this.sendData({
      url: `http://localhost:4545/users/${userId}`,
      data: user,
      method: 'PUT'
    });
  }

  async filterUsers(filterOption) {
    return this.getData(`http://localhost:4545/users?${filterOption}=true`);
  }

  async getSortUsers({ sortOptionName, order }) {
    return this.getData(`http://localhost:4545/users?_sort=${sortOptionName}&_order=${order}`);
  }

  async getSearchUsers(str) {
    return this.getData(`http://localhost:4545/users?name_like=${str}`);
  }
}