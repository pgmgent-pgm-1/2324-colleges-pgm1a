// guid
const characters =
  "abcdefghijklmnopqrstuvwxyzABDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function generateGUID(number) {
  let password;
  for (let i = 0; i < number; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]; // TODO random index met characters.length
  }
  return password;
}

console.log(generateGUID(10));
console.log(generateGUID(15));
