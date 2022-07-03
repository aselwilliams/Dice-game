import Dice from "./components/Dice";
import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons";

function App({ sides }) {
  const [message, setMessage] = useState("Let's Play");
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("two");
  const [openModal, setOpenModal] = useState(false);

  const updateNames = () => {
    setOpenModal(true);
  };

  const rollDice = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    const score1 = Object.values(newDie1);
    const score2 = Object.values(newDie2);
    setDie1(Object.keys(newDie1));
    setDie2(Object.keys(newDie2));

    if (score1 > score2) {
      setMessage(`${player1} is a Winner!`);
    } else if (score2 > score1) {
      setMessage(`${player2} is a Winner!`);
    } else {
      setMessage("It's a Draw!");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "player1") {
      setInput1(e.target.value);
    } else {
      setInput2(e.target.value);
    }
  };
  const handlePlayers = () => {
    if (input1 && input2) {
      setPlayer1(input1);
      setPlayer2(input2);
      setInput1("");
      setInput2("");
      setOpenModal(false);
    } else {
      alert("Please enter player names!");
    }
  };
  const handleModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="App">
      {openModal ? (
        <div className="modal">
        <div>
          <input
            type="text"
            value={input1}
            name="player1"
            onChange={(e) => handleChange(e)}
            placeholder="Player 1 name"
          />
        </div>
        <div>
          <input
            type="text"
            value={input2}
            name="player2"
            onChange={(e) => handleChange(e)}
            placeholder="Player 2 name"
          />
        </div>
        <button className="ok" onClick={handlePlayers}>
          OK
        </button>
        <button className="cancel" onClick={handleModal}>
          Cancel
        </button>
      </div>
      ) : (
        <h1 className="message">{message}</h1>
      )}
      <Dice player1={player1} player2={player2} die1={die1} die2={die2} />
      <Buttons rollDice={rollDice} updateNames={updateNames} />
    </div>
  );
}

App.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};
export default App;
