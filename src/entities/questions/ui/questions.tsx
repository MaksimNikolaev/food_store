import { useState } from 'react';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import { questionData } from '../model';
import { Question } from './question';
import styles from './questions.module.css';

export const Questions = () => {
  const [openId, setId] = useState<null | number>(null);  

  return (
    <section className={styles.questions}>
      <h2 className={styles.title}>
        Frequently Asked <SpanColor>Questions</SpanColor>
      </h2>
      <ul className={styles.list}>
        {questionData.map(question => (
          <Question
            key={question.id}
            isOpen={question.id === openId}
            onClick={() =>
              question.id === openId ? setId(null) : setId(question.id)
            }
            question={question}
          />
        ))}
      </ul>
    </section>
  );
};
