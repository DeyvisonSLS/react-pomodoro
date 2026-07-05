import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  className?: string;
};

export function Container({
  children,
  direction = 'vertical',
  className = '',
}: ContainerProps) {
  const baseClass =
    direction === 'horizontal'
      ? styles.containerHorizontal
      : styles.containerVertical;

  return <div className={`${baseClass} ${className}`.trim()}>{children}</div>;
}
