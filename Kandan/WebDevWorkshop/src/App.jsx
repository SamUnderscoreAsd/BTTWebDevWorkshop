import { useState } from "react";
import "./styles.css";

function App() {
  const [newMessage, setMessage] = useState("");
  const [items, setItems] = useState(['Chicken', 'Eggs', 'Broth']);

  return (
    <div>
      <div>
        <h1>My Grocery List</h1>
        <ul id="list">
          {items.map((val) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          setItems(items.slice(0,-1))
        }}
      >
        Remove Last Item
      </button>
      <div>
        <button
          onClick={() => {
            setItems([...items, newMessage])
          }}
        >
          Add New Item
        </button>
        <input
          onChange={(event) => setMessage(event.target.value)}
          placeholder="New Item"
        />
      </div>
    </div>
  );
}

export default App;
