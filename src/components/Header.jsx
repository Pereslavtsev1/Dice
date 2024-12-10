import { FaDice } from "react-icons/fa";
import ChristmasHatSvg from "./ChristmasHatSvg";

const Header = () => {
  return (
    <div className="mx-5 mt-8 flex w-full">
      <FaDice className="mx-16 size-20 fill-secondary" />
      <div className="header relative">
        <ChristmasHatSvg className="absolute -top-5 h-10 w-10 fill-[#646669] pl-1" />
        <h1 className="text-7xl font-extrabold text-secondary">Dice Game</h1>
      </div>
    </div>
  );
};

export default Header;
