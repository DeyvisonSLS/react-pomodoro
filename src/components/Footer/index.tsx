import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <span>
        React Pomodoro - Made with 💘 by{' '}
        <a
          href='https://deyvison.com.br'
          target='_blank'
          rel='noopener noreferrer'
        >
          Deyvison
        </a>
      </span>
      <a
        href='https://en.wikipedia.org/wiki/Pomodoro_Technique'
        target='_blank'
        rel='noopener noreferrer'
      >
        Understanding the pomodoro technique 🍅
      </a>
    </footer>
  );
}
