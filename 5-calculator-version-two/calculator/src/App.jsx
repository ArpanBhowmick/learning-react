import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [ButtonNames, setAllButtons] = useState([
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ]);

  const onButtonClick = () => {
    for (let ButtonNames of button) {
      console.log(button);
    }
    setAllButtons(button);
    console.log(newvalue);
  };

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer onButtonClick={onButtonClick} ButtonNames = {ButtonNames}></ButtonsContainer>
    </div>
  );
}

export default App;
