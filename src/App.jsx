import { useState } from "react";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import Header from "./components/Header";
import PlayerArea from "./components/PlayerArea";
import RollButton from "./components/RollButton";
function App() {
  const [faces, setFaces] = useState([1, 1, 1]);
  let [firstCount, setFirstCount] = useState(0);
  let [firstPlayerScore, setFirstPlayerScore] = useState(0);
  let [secondPlayerScore, setSecondPlayerScore] = useState(0);
  let [order, setOrder] = useState(0);

  const rollDice = () => {
    const newFaces = faces.map(() => Math.floor(Math.random() * 6) + 1);
    setFaces(newFaces);

    const count = newFaces.reduce((prev, cur) => prev + cur, 0);

    if (order === 0) {
      setFirstCount(count);
      setOrder(1);
    } else {
      setOrder(0);
      setFirstPlayerScore((prevScore) =>
        firstCount > count ? prevScore + 1 : prevScore,
      );
      setSecondPlayerScore((prevScore) =>
        firstCount < count ? prevScore + 1 : prevScore,
      );
      setFirstCount(0);
    }
  };

  return (
    <main className="flex flex-col justify-between overflow-hidden">
      <Header />
      <div className="mt-20 flex items-center justify-center">
        <Counter count={firstCount} />
      </div>
      <div className="flex items-center justify-between pt-36">
        <PlayerArea number={1} score={firstPlayerScore} />
        <div className="mt-10 flex w-1/3 flex-col items-center rounded-2xl bg-gray-200 p-5 shadow-lg">
          <div className="flex flex-row justify-center">
            {faces.map((face, index) => (
              <Dice key={index} face={face} />
            ))}
          </div>
          <div className="mt-5">
            <RollButton onRoll={rollDice} />
          </div>
        </div>
        <PlayerArea number={2} score={secondPlayerScore} reversed={true} />
      </div>
    </main>
  );
}

export default App;
