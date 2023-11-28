import { BASE_URL } from './constants';

class MainApi {
  constructor({
    baseUrl,
    headers
  }) {
    this._baseUrl = baseUrl;
    this._token = headers['authorization'];
  };
 
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  }

  _request(endpoint, options) {
    const url = `${this._baseUrl}/${endpoint}`;
    return fetch(url, options).then(this._checkResponse);
  }

  async getUserInfo() {
    const response = await this._request("users/me",  {
      headers: {
        authorization: this._token,
      },
      credentials: 'true',
    });
    return response;
  };

  async updateUserData(name, email) {
    const response = await this._request("users/me", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${this._token}`,
      },
      credentials: 'true',
      body: JSON.stringify({
        name,
        email,
      })
    })
    return response;
  };

  async getUsersMovies() {
    const response = await this._request("movies", {
      headers: {
        authorization: this._token,
      },
      credentials: 'true',
    })
    return response;
  };

  // добавление новой карточки (фильма)
  async addNewMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    id,
  }) {
    const response = await this._request("movies", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${this._token}`,
      },
      credentials: 'true',
      body: JSON.stringify({
        country: country || 'no country',
        director,
        duration,
        year,
        description,
        image,
        trailerLink: trailerLink,
        nameRU: nameRU || 'no name',
        nameEN: nameEN || 'no name',
        thumbnail,
        movieId: id,
      })
    })
    return response;
  };

  // удаление карточки фильма с сервера
  async deleteMovie(movieID) {
    const response = await this._request(`movies/${movieID}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this._token}`,
      },
      credentials: 'true',
    })
    return response;
  };

  // регистрация
  async register(name, email, password) {
    const response = await this._request('signup', {
      method: 'POST',
      credentials: 'true',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    });
    return response;
  };

  async login(email, password) {
  const response = await this._request('signin', {
    method: 'POST',
    credentials: 'true',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    })
  });
  return response;
};

  async signout() {
    const response = await this._request('signout', {
      method: 'POST',
      credentials: 'true',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: this._token,
      }
    });
    return response;
  };

// метод авторизации для проверки токена и получения данных пользователя
  async checkToken() {
  const res = await this._request("users/me",  {
    method: "GET",
    credentials: 'true',
    headers: {
      "Content-Type": "application/json",
      authorization: this._token,
    }
  });
  return this._checkResponse(res);
};
};

// создание экземпляра класса Api
const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default mainApi;