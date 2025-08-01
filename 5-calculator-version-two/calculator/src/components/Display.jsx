import styles from "./display.module.css";

const Display = ({ calVal }) => {
  return (
    <>
      <input className={styles.display} type="text" value={calVal} readOnly />
    </>
  );
};

export default Display;
