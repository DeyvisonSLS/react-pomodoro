import styles from './styles.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  color?: 'destructive' | 'info' | 'success' | 'warning' | 'default';
} & React.ComponentProps<'button'>;

const variantStyles: Record<string, string> = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
  outline: styles.outlineButton,
  ghost: styles.ghostButton,
  cta: styles.ctaButton,
};

const colorStyles: Record<string, string> = {
  default: '',
  destructive: styles.destructiveButton,
  info: styles.infoButton,
  success: styles.successButton,
  warning: styles.warningButton,
};

export function Button({
  variant = 'primary',
  children,
  className,
  color = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.baseButton} ${variantStyles[variant]} ${className ?? ''} ${colorStyles[color]}`}
      {...props}
    >
      {children}
    </button>
  );
}
