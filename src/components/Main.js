import ScreenCalculator from "./content/ScreenCalculator";
import BodyCalculator from "./content/BodyCalculator";
import { useState } from "react";

const Main = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [lastValue, setLastValue] = useState("");
  return (
    <main className="content">
      <section className="main-section">
        <ScreenCalculator lastValue={lastValue} currentValue={currentValue} />
        <BodyCalculator
          lastValue={lastValue}
          currentValue={currentValue}
          setLastValue={setLastValue}
          setCurrentValue={setCurrentValue}
        />
      </section>
    </main>
  );
};

export default Main;
