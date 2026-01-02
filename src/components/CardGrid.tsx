import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CardGrid.module.css';

export type Card = {
  to: string;
  title: string;
  description?: string;
  icon?: React.ReactNode; // icon component
};

type Props = {
  cards: Card[];
  columns?: number;
};

export default function CardGrid({ cards, columns = 3 }: Props) {
  return (
    <div className={styles.root} >
      {cards.map((c) => (
        <Link
          key={c.to}
          className={styles.card}
          to={c.to}
          aria-label={`${c.title}${c.description ? ': ' + c.description : ''}`}
          role="link"
        >
          {c.icon && (
            <span aria-hidden className={styles.icon}>{c.icon}</span>
          )}
          <div>
            <strong className={styles.title}>{c.title}</strong>
            {c.description && <div className={styles.desc}>{c.description}</div>}
          </div>
        </Link>
      ))}
    </div>
  );
}
