// src/components/LikeButton.js
import { useState, useEffect } from "react"; // <- note the added import of useState

export default function LikeButton() {
  const initialState = false;
  const [liked, setLiked] = useState(initialState); // <- using state!

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, []);

  return (
    <div>
      <p>
        <button onClick={() => setLiked(!liked)}>
          {liked ? "You've liked this. Click to unlike" : "Like this"}
        </button>
      </p>
    </div>
  );
}
