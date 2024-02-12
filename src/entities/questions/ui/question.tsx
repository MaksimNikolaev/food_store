import { FC, useRef } from 'react';
import styles from './questions.module.css';
import { TQuestion } from '../model';

export const Question: FC<TQuestion> = ({ question, onClick, isOpen }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <li className={styles.list_item} onClick={() => onClick()}>
      <div className={styles.group}>
        <h3 className={styles.caption}>{question.title}</h3>
        <button
          className={`${styles.btn} ${isOpen ? styles.btn_active : ''}`}
        />
      </div>
      <div
        className={styles.accordion_collapse}
        style={
          isOpen ? { height: itemRef.current?.scrollHeight } : { height: '0px' }
        }
      >
        <p className={`${styles.text}`} ref={itemRef}>
          {question.text}
        </p>
      </div>
    </li>
  );
};
