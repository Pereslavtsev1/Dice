import { useState } from "react";
import Dice from "./components/Dice";
import RollButton from "./components/RollButton";

function App() {
  const [faces, setFaces] = useState([1, 1, 1]);

  const rollDice = () => {
    const newFaces = faces.map(() => Math.floor(Math.random() * 6) + 1);
    setFaces(newFaces);
    const sum = newFaces.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum); // 6
  };
  // #dad3c1,#EFEAD0,#323437
  return (
    <div className="flex items-center justify-center h-screen bg-[#323437]">
      <div className="place-items-center w-[700px] p-5 flex-col bg-gray-200 rounded-2xl  shadow-lg">
        <div className="flex flex-row justify-center">
          {faces.map((face, index) => (
            <Dice key={index} face={face} />
          ))}
        </div>
        <RollButton onRoll={rollDice} />
      </div>
    </div>
  );
}

export default App;
