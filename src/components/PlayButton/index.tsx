import styles from './styles.module.css';
import { Button } from '../Button';
import { PlayCircle } from 'lucide-react';

type PlayButtonProps = React.ComponentProps<typeof Button>;

export function PlayButton({ className, ...props }: PlayButtonProps) {
  return (
    <Button
      type='submit'
      variant='cta'
      className={`${styles.playButton} ${className ?? ''}`}
      {...props}
    >
      <PlayCircle />
      Start
    </Button>
  );
}
