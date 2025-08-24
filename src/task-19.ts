// Функція fetchUser повертає проміс, який через axios отримує одного користувача з API по userId.

// import axios from "axios";

// const fetchUser = async (userId) => {
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   return response.data;
// };

// const getUserName = async (id) => {
//   const user = await fetchUser(id);
//   console.log(user.name);
// };

// getUserName(1);

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUser.

import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
  email: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id: number) => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);
