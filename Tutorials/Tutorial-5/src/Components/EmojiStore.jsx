// This component demonstrates how to update the state in React using the useState hook.
// We have a state variable emojiStore which is an array of emojis.
// We have a function addEmoji which takes an emoji as an argument and adds it to the emojiStore array.
// We have three buttons to add happy, sad, and cool emojis to the emojiStore.
// We have a clear button to clear the emojiStore.
// We use the setEmojiStore function to update the emojiStore array.
// We use the spread operator to copy the existing emojiStore array and add the new emoji to it.
// We use the map function to display the emojis in the emojiStore array.
// We use the key prop to provide a unique key to each emoji element.
// We use the listStyleType property to remove the bullet points from the list.
import { useState } from "react";

export default function EmojiStore() {
  const [emojiStore, setEmojiStore] = useState([]);

  const addEmoji = (emoji) => {
    //DO NOT USE THE BELOW LINE. IT WILL NOT WORK AS EXPECTED.
    //push method does not work as expected in React. It does not update the state.
    // setEmojiStore(emojiStore.push(emoji));

    //Use the below line to update the state.
    setEmojiStore([...emojiStore, emoji]);
  };

  return (
    <div>
      <h3>Emoji Store</h3>
      <button onClick={() => addEmoji("😊")}>Add Happy</button>
      <button onClick={() => addEmoji("🙁")}>Add Sad</button>
      <button onClick={() => addEmoji("😎")}>Add Cool</button>
      <br />
      <button onClick={() => setEmojiStore([])}>Clear</button>
      <ul>
        {emojiStore.map((emoji, index) => (
          <li style={{ listStyleType: "none" }} key={index}>
            {emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}