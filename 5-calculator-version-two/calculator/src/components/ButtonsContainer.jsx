import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick}) => {
  const ButtonNames = [
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
  ];


  return (
    <>
      <div className={styles.buttonContainer}>
        {" "}
        {ButtonNames.map((button) => (
          <button key={button} className={`${styles.button} ${button === "C" ? styles.redCbutton : ""}`}
          onClick={() => onButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
      
    </>
  );
};

export default ButtonsContainer;
