const ScreenCalculator = ({currentValue, lastValue}) => {
  return (
    <header className="screen-calculator">
        <span>{lastValue}</span>
        <p>{currentValue}</p>
    </header>
  )
}

export default ScreenCalculator