// src/components/AwesomeAnimals.js
//import { useState } from "react"; // <- note the added import of useState

export default function AwesomeAnimals() {
  //   const initial_numLikes = 0;
  //   const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  //console.log("what are these?", numLikes, set_numLikes);

  //   const increment = () => {
  //     console.log("Yes, clicked! Current number of likes:", numLikes);
  //     set_numLikes(numLikes + 1);
  //   };

  return (
    <div>
      <ul>
        {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
          (animal, index) => {
            return (
              <li key={index}>
                Awesomeness level {index + 1}: {animal}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
