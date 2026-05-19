import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Cronometer({ children }: ContainerProps) {
  return <div className={styles.cronCounter}>{children}</div>;
}
