import { FC, useState } from 'react';
import styles from './questions.module.css';
import { TQuestion } from '../model';

export const Question: FC<TQuestion> = ({ question }) => {
  const [textVisible, setTextVisible] = useState(false);

  const handleClick = () => {
    textVisible ? setTextVisible(false) : setTextVisible(true);
  };

  return (
    <li className={styles.list_item} onClick={handleClick}>
      <div className={styles.group}>
        <h3 className={styles.caption}>{question.title}</h3>
        <button
          className={`${styles.btn} ${textVisible ? styles.btn_active : ''}`}
        />
      </div>
      <p className={`${styles.text} ${textVisible ? styles.text_visible : ''}`}>
        {question.text}
      </p>
    </li>
  );
};
