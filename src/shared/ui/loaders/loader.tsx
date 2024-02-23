import styles from './loader.module.css';

const Loader = () => {
  const numDivs = 9;
  const divs = Array.from({ length: numDivs }, (_, index) => <div key={index}></div>);

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>{divs}</div>
    </div>
  );
};

export default Loader;
