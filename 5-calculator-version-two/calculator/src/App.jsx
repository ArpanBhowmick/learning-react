import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setcalVal(result);
      } catch (error) {
        setcalVal("ERROR!");
      }
    } else {
      let newdisplayval = calVal + buttonText;
      setcalVal(newdisplayval);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
