import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
};

export function Container({
  children,
  direction = 'vertical',
}: ContainerProps) {
  return (
    <div
      className={
        direction === 'horizontal'
          ? styles.containerHorizontal
          : styles.containerVertical
      }
    >
      {children}
    </div>
  );
}
