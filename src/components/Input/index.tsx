import styles from './styles.module.css';

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
} & React.ComponentProps<'input'>;

export function Input({ type, label, placeholder, id, ...props }: InputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <span className={styles.inputWrapper}>
        <input
          className={styles.customInput}
          id={id}
          name='taskInput'
          placeholder={placeholder}
          type={type}
          {...props}
        />
        <svg
          className={styles.inputBorder}
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path
            d='M5 5 C 20 2, 80 8, 95 5 C 96 20, 94 80, 95 95 C 80 98, 20 92, 5 95 C 5 80, 6 20, 5 5'
            fill='none'
            stroke='currentColor'
            strokeWidth='1'
            vectorEffect='non-scaling-stroke'
          />
        </svg>
      </span>
    </>
  );
}
