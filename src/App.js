import React, { useEffect, useState } from "react";
import { apiRequest } from "./services";
import { word } from "./data";
import { Button, Grid, GridList } from "@material-ui/core";
import "./App.css";
function App() {
  const keyboard = [
    { id: "q", value: "Q" },
    { id: "w", value: "W" },
    { id: "e", value: "E" },
    { id: "r", value: "R" },
    { id: "t", value: "T" },

    { id: "a", value: "A" },
    { id: "b", value: "B" },
    { id: "c", value: "C" },
    { id: "d", value: "D" },
    { id: "f", value: "F" },
    { id: "g", value: "G" },
    { id: "h", value: "H" },
    { id: "i", value: "I" },
    { id: "j", value: "J" },
    { id: "k", value: "K" },
    { id: "l", value: "L" },
    { id: "m", value: "M" },
    { id: "n", value: "N" },
    { id: "o", value: "O" },
    { id: "p", value: "P" },
    { id: "s", value: "S" },
    { id: "u", value: "U" },
    { id: "x", value: "X" },
    { id: "y", value: "Y" },
    { id: "z", value: "Z" },
    { id: "enter", value: "ENTER" },
    { id: "del", value: "DEL" },
  ];
  const [squid, setSquid] = useState("");
  const [key, setKey] = useState([]);
  console.log(key);
  useEffect(() => {
    let len = word.length;

    len = Math.random() * len;
    len = Math.floor(len);

    setSquid(word[len]);
  }, []);

  const handleKey = (item) => {
    if (item.id === "del" && key.length > 0) {
      const newItem = key.pop();
      if (key.value === "") return;
      return setKey((i) => {
        const newArray = i.pop();
        console.log({ newArray });
        return [newArray];
      });
    }
    if (key.length < 5 && item.value !== "DEL" && item.value !== "ENTER") {
      console.log("not del", item.value);
      return setKey((prev) => [...prev, item]);
    }
  };
  return (
    <div className="game_container">
      <div
        className="game_relative
      
      "
      >
        <div
          className="game_wrapper
      
      "
        >
          {Array(30)
            .fill()
            .map((k, i) => (
              <div className=" word_selected " key={i}>
                {k}
              </div>
            ))}
          <div className="game_wrapper_absolute">
            {key.map((k, i) => (
              <div className=" word_selected " key={i}>
                {k?.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="letter_wrapper">
        {keyboard.map((item) => (
          <button
            onClick={(e) => handleKey(item)}
            className="letter "
            style={{ width: item.id === "enter" && "8rem" }}
            key={item.id}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
