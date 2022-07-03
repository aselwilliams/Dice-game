import React from "react";
import Die from "./Die";

function Dice({ player1, player2, die1, die2 }) {
  return (
    <main>
      <section>
        <h1>{player1}</h1>
        <Die face={String(die1)} />
      </section>
      <section>
        <h1>{player2}</h1>
        <Die face={String(die2)} />
      </section>
    </main>
  );
}

export default Dice;
