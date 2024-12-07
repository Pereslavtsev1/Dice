import { useState } from "react";
import Dice from "./components/Dice";
import Header from "./components/Header";
import RollButton from "./components/RollButton";

function App() {
  const [faces, setFaces] = useState([1, 1, 1]);

  const rollDice = () => {
    const newFaces = faces.map(() => Math.floor(Math.random() * 6) + 1);
    setFaces(newFaces);

    const sum = newFaces.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum); // 6
  };

  return (
    <main className="flex flex-col items-center h-screen bg-[#323437]">
      <Header />
      <div className="flex mt-[10%] flex-col items-center w-[700px] p-5 bg-gray-200 rounded-2xl shadow-lg ">
        <div className="flex flex-row justify-center">
          {faces.map((face, index) => (
            <Dice key={index} face={face} />
          ))}
        </div>

        <div className="mt-5">
          <RollButton onRoll={rollDice} />
        </div>
      </div>
    </main>
  );
}

export default App;
