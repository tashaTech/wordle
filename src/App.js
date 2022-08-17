import React, { useEffect, useState } from "react";
import { apiRequest } from "./services";
import { word } from "./data";
import { keyboard } from "./data";
import "./App.css";
function App() {
  const [fiveLetter, setFiveLetter] = useState("");
  const [result, setResult] = useState(false);
  const [squid, setSquid] = useState("");
  const [key, setKey] = useState([]);
  const [line, setLine] = useState(1);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [arrayLen, setArrayLen] = useState(5);
  console.log(key);
  useEffect(() => {
    let len = word.length;

    len = Math.random() * len;
    len = Math.floor(len);

    setSquid(word[len]);
  }, []);
  console.log({ arrayLen });

  ////entered key
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
    if (key.length < arrayLen && item.value !== "DEL") {
      console.log("not del", item.value);
      return setKey((prev) => [...prev, item]);
    }
  };

  ////////HANDLE sUBMIT
  const handleSumit = () => {
    let len = key.length;
    let string = "";
    for (let i = 0; i < len; i++) {
      string += key[i].value;
      console.log({ string, squid });
    }
    setFiveLetter(string);
    if (squid === string) {
      console.log("match", squid);
      return setResult(true);
    } else {
      setLine((prev) => prev + 1);

      setArrayLen((prev) => prev + 5);
      console.log({ line });
      return;
    }

    return;
  };
  return (
    <div className="game_container">
      <h1>chosen {fiveLetter.substring(key.length - 5, key.length)}</h1>
      <h1>word {squid}</h1>
      {result && <h1>YOU WIN</h1>}
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
              <div
                style={{
                  backgroundColor:
                    squid.split("").indexOf(k.value) === i
                      ? "green"
                      : squid.split("").indexOf(k.value) !== i &&
                        squid.includes(k.value)
                      ? "orange"
                      : "grey",
                }}
                className=" word_selected "
                key={i}
              >
                {k?.value}
                {console.log(squid.split("").indexOf(k.value), i)}
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
            key={item.id}
          >
            {item.value}
          </button>
        ))}
      </div>
      <div className="action_wrapper">
        <button
          disabled={key.length < arrayLen ? true : false}
          onClick={() => handleSumit()}
          type="submit"
          className="action_submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
