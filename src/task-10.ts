// Задача 10

// У вас є масив імен користувачів:

// const users = ["alice", "bob", "charlie"];

// Завдання:

// 1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).

// 2. Усередині функції переберіть масив імен та для кожного імені створи об’єкт з такими властивостями:

// id — порядковий номер (починаючи з 1),
// name — саме ім’я користувача (рядок з масиву).
// 3. Функція повинна повертати масив отриманих об’єктів.

// 4. Переконайтеся, що результат функції має правильну типізацію, а TypeScript не видає помилок.

// Приклад виклику:

const users = ['alice', 'bob', 'charlie'];

function toUserObjects(users: string[]): Array<{ name: string; id: number }> {
  const userObject: { name: string; id: number }[] = [];
  for (let i = 0; i <= users.length - 1; i++) {
    userObject.push({
      name: users[i],
      id: i + 1,
    });
  }
  return userObject;
}

toUserObjects(users);
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
