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
      <input
        className={styles.customInput}
        id={id}
        name='taskInput'
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </>
  );
}
