import { FaDice } from "react-icons/fa";

const Header = () => {
  return (
    <div className="m-5 flex w-full">
      <div className="logo"></div>
      <FaDice className="fill-secondary mx-10 size-20" />
      <h1 className="text-secondary text-7xl font-extrabold">Dice Game</h1>
    </div>
  );
};

export default Header;
