import { useState } from "react";
const arrayIDs = [];


export default function(){
  const [tweet ,setTweet] = useState([]);
  const addTweet = (email, comment) => {
    setTweet(state => {
      const id = Math.floor(Math.random() * 1000);
      const today = new Date()
      const time = today.toDateString()
      const commentary = {email, comment, id, time};
      const feed = [commentary, ...state]
      return feed;
    })
  }

  return {addTweet, tweet}
}