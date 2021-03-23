// src/components/LikeCounter.js
import { useState, useEffect } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={() => set_numLikes(numLikes + 1)}>Like</button>
        <button onClick={() => set_numLikes(0)}>Reset</button>
      </p>
    </div>
  );
}
