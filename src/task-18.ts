// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.

// import axios from "axios";

// const fetchUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// };

// const getUsers = async () => {
//   const users = await fetchUsers();
//   console.log(users);
// };

// getUsers();

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.

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

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();
