import { FaDice } from "react-icons/fa";
import ChristmasHatSvg from "./ChristmasHatSvg";
import GarlandSvg from "./GarlandSvg";

const Header = () => {
  return (
    <div className="header flex justify-between">
      <div className="logo flex">
        <FaDice className="ml-16 mr-4 size-28 fill-secondary" />
        <div className="mx-5 mt-8 flex w-full">
          <div className="header relative flex">
            <ChristmasHatSvg className="absolute -top-5 h-10 w-10 fill-[#646669] pl-1" />

            <h1 className="text-7xl font-extrabold text-secondary">Dice</h1>

            <div className="flex flex-col pl-6">
              <h1 className="m-0 text-7xl font-extrabold text-secondary">
                Game
              </h1>
              <GarlandSvg />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2">
        <div className="relative flex pl-10">
          <GarlandSvg className="h-[18rem] w-[18rem] scale-x-[-1] transform" />
          <GarlandSvg className="h-[15rem] w-[15rem]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
