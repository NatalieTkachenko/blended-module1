// Є функція sendDoneStatus:

// function sendDoneStatus(callback) {
//   callback("done");
// }

// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

type CallbackType = (arg: string) => void;

function sendDoneStatus(callback: CallbackType) {
  callback('done');
}
