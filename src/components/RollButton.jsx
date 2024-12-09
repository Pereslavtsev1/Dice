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
      onRoll();
    }, 4050);
  };

  return (
    <button
      className="duration-400 mt-16 cursor-pointer rounded-md border-2 border-[#b33951] px-4 py-2 text-lg font-bold text-[#b33951] transition hover:bg-[#b33951] hover:text-white"
      onClick={handleClick}
    >
      Roll Dice
    </button>
  );
};
export default RollButton;
