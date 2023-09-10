
export default (characters, lengthPassword) => {
  let length = lengthPassword;
  let newPassword = "";
  for(let i = 0; i < length; i++){
    const index = Math.floor(Math.random() * characters.length);
    newPassword += characters[index];
  }
  return newPassword;
}