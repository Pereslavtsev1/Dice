import { useState } from "react";
import Dice from "./components/Dice";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlayerArea from "./components/PlayerArea";
import RollButton from "./components/RollButton";
function App() {
  const [faces, setFaces] = useState([1, 1, 1]);
  const [firstCount, setFirstCount] = useState(0);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);
  const [order, setOrder] = useState(0);

  const rollDice = () => {
    const newFaces = faces.map(() => Math.floor(Math.random() * 6) + 1);
    setFaces(newFaces);

    console.log("Бросок кубиков:", newFaces);
    const currentCount = newFaces.reduce((prev, cur) => prev + cur, 0);

    setTimeout(() => {
      if (order === 0) {
        setFirstCount(currentCount);
        setOrder(1);
      } else {
        setOrder(0);
        setFirstPlayerScore((prevScore) =>
          firstCount > currentCount ? prevScore + 1 : prevScore,
        );

        setSecondPlayerScore((prevScore) =>
          firstCount < currentCount ? prevScore + 1 : prevScore,
        );

        setFirstCount(0);
      }
    }, 4050);
  };

  return (
    <main className="flex flex-col justify-between overflow-hidden">
      <Header />
      <div className="flex items-center justify-between pt-40">
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
      <Footer />
    </main>
  );
}

export default App;
