import { useState } from "react";

const arrayIDs = [];
// const [tweet ,setTweet] = useState('');

const addTweet = (email, comment) => {
  const id = Math.floor(Math.random() * 1);
  if (arrayIDs.findIndex(id)){
    arrayIDs.push(id);
  } else {
    alert("This number has been used!\nPlease, try again.")
  }
  const today = new Date()
  const time = today.toDateString()
  const commentary = {email, comment, id, time};
  console.log('comment', commentary)
}




export { addTweet};
