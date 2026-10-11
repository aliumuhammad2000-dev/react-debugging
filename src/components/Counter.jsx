function Counter({ count, setCount }) {
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;