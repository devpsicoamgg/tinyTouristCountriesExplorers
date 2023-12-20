import styles from "./Error404.module.css";



const Error404 = () => {
  return (
    <div className={styles.containerError404Page}>
      <p className={styles.errorText}>
        Oopsie-daisy!
        <br /> Error 404
      </p>
    </div>
  );
};

export default Error404;
