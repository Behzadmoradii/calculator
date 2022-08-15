const BodyCalculator = ({
  currentValue,
  lastValue,
  setCurrentValue,
  setLastValue,
}) => {
  // Show previous data on screen
  const saveData = (e) => {
    !lastValue &&
      currentValue &&
      setLastValue(currentValue + e.target.textContent);
    lastValue &&
      currentValue &&
      setLastValue(calculation(e.target.textContent));
    setCurrentValue("");
  };
  // Check dot is one time be on current value
  const checkDotIsTrue = () => {
    currentValue &&
      setCurrentValue((prev) => (prev.includes(".") ? prev : prev + "."));
  };

  // Add data on screen calculator
  const updateCalculators = (e) => {
    setCurrentValue((prev) => {
      if (prev === "0" && e.target.textContent === "0") return "0";
      return prev + e.target.textContent;
    });
  };
  // The operation of calculating values
  const calculation = (operation) => {
    const EditLastValue = Number(lastValue.slice(0, -1));
    const EditCurrentValue = Number(currentValue);
    let result = 0;
    switch (lastValue[lastValue.length - 1]) {
      case "×":
        result = EditLastValue * EditCurrentValue;
        break;
      case "÷":
        result = EditLastValue / EditCurrentValue;
        break;
      case "−":
        result = EditLastValue - EditCurrentValue;
        break;
      case "+":
        result = EditLastValue + EditCurrentValue;
        break;
      default:
        return result;
    }

    setLastValue("");
    setCurrentValue(result.toString());
    return (result + operation).toString();
  };

  return (
    <article className="body-calculator">
      <button onClick={(e) => updateCalculators(e)}>1</button>
      <button onClick={(e) => updateCalculators(e)}>2</button>
      <button onClick={(e) => updateCalculators(e)}>3</button>
      <button onClick={(e) => saveData(e)}>&#215;</button>
      <button onClick={(e) => updateCalculators(e)}>4</button>
      <button onClick={(e) => updateCalculators(e)}>5</button>
      <button onClick={(e) => updateCalculators(e)}>6</button>
      <button onClick={(e) => saveData(e)}>&#247;</button>
      <button onClick={(e) => updateCalculators(e)}>7</button>
      <button onClick={(e) => updateCalculators(e)}>8</button>
      <button onClick={(e) => updateCalculators(e)}>9</button>
      <button onClick={(e) => saveData(e)}>&#8722;</button>
      <button onClick={() => checkDotIsTrue()}>.</button>
      <button onClick={(e) => updateCalculators(e)}>0</button>
      <button onClick={() => setCurrentValue((prev) => prev.slice(0, -1))}>
        &#8592;
      </button>
      <button onClick={(e) => saveData(e)}>&#43;</button>
      <button
        onClick={() => {
          setCurrentValue("");
          setLastValue("");
        }}
      >
        C
      </button>
      <button onClick={() => currentValue && calculation()}>&#61;</button>
    </article>
  );
};

export default BodyCalculator;
