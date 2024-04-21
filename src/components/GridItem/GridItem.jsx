import styles from './GridItem.module.css';

export const GridItem = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};
