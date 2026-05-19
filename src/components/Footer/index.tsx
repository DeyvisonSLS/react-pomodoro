import styles from './styles.module.css';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p>Understanding the pomodoro technique 🍅</p>
      <p>
        React Pomodoro - Made with 💘 by{' '}
        <a href='https://deyvison.com.br'>Deyvison</a>
      </p>
    </div>
  );
}
