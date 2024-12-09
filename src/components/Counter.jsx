const Counter = ({ count }) => {
  return (
    <>
      <div className="counter bg-secondary flex h-14 w-14 items-center justify-center rounded-full">
        <h1 className="text-2xl font-extrabold">{count}</h1>
      </div>
    </>
  );
};

export default Counter;
