export const RollButton = ({ onRoll }) => {
  const handleClick = () => {
    const diceElements = document.querySelectorAll(".dice");
    diceElements.forEach((diceElement) => {
      diceElement.style.animation = "rolling 4s";
    });

    setTimeout(() => {
      diceElements.forEach((diceElement) => {
        diceElement.style.animation = "none";
      });
      const randomValues = Array.from(diceElements).map(
        () => Math.floor(Math.random() * 6) + 1,
      );
      onRoll(randomValues);
    }, 4050);
  };

  return (
    <button
      className="cursor-pointer text-[#b33951] mt-16 py-2 px-4 rounded-md font-bold text-lg border-2 border-[#b33951] transition duration-400 hover:bg-[#b33951] hover:text-white"
      onClick={handleClick}
    >
      Roll Dice
    </button>
  );
};
export default RollButton;
