import React, { useState } from 'react';
import { Link } from 'react-router';
import type { LinkHTMLAttributes } from 'react';
import { HomeIcon, InfoIcon, Settings, Sun } from 'lucide-react';
import styles from './styles.module.css';
import '../../styles/global.css';
import buttonStyles from '../Button/styles.module.css';
import { cn } from '../../utils/cn';

interface MenuItemData {
  label: string;
  icon: React.ElementType; // Alterado para React.ElementType para que possamos passar props
  link: string;
  ariaLabel?: string;
}

const menuItems: MenuItemData[] = [
  {
    label: 'Home',
    icon: HomeIcon, // Passamos a referência do componente
    link: '/',
    ariaLabel: 'Página inicial',
  },
  {
    label: 'History',
    icon: InfoIcon, // Passamos a referência do componente
    link: '/history',
    ariaLabel: 'Histórico de tarefas',
  },
  {
    label: 'Settings',
    icon: Settings, // Passamos a referência do componente
    link: '/settings',
    ariaLabel: 'Configurações',
  },
];

interface MenuItemProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  label: string;
  type?: 'default' | 'icon' | 'text';
  variant?: 'default' | 'primary' | 'cta' | 'secondary';
  icon: React.ElementType;
  link: string;
  ariaLabel?: string;
}

const variantClasses: Record<string, string> = {
  default: buttonStyles.outlineButton,
  primary: buttonStyles.primaryButton,
  secondary: buttonStyles.secondaryButton,
  cta: buttonStyles.ctaButton,
};

type Theme = 'light' | 'dark';

function MenuItem({
  label,
  icon: Icon,
  link,
  type = 'default',
  variant = 'default',
  ariaLabel,
  ...props
}: MenuItemProps) {

  const className = cn(
    buttonStyles.baseButton,
    variantClasses[variant] || buttonStyles.outlineButton,
  );

  return (
    <Link
      className={className}
      to={link}
      aria-label={ariaLabel}
      {...props}
    >
      {type && type === 'text' && <>{label}</>}
      {type && type === 'icon' && <Icon width={16} />}
      {/* Renderiza o componente do ícone e passa as props */}
      {type && type === 'default' && (
        <>
          <Icon width={16} />
          {label}
        </>
      )}
    </Link>
  );
}

export function Menu() {
  const [theme, setTheme] = useState<Theme>('dark');
  
  function handleChangeTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    event.preventDefault();
    
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  }

  return (
    <nav className={styles.menu}>
      <p>{theme}</p>
      {menuItems.map((item, index) => {
        const { ariaLabel, ...itemProps } = item;

        return (
          <MenuItem
            type='text'
            key={index}
            {...itemProps}
            aria-label={ariaLabel}
            title={ariaLabel}
          />
        );
      })}

      {/* Login / Signup */}
      <MenuItem
        type='text'
        variant='cta'
        icon={Sun}
        label='Login'
        link='/settings'
        aria-label='Fazer login'
        title='Fazer login'
      />
      {/* <MenuItem
        type='text'
        variant='secondary'
        icon={Sun}
        label='Sign Up'
        link='/settings'
      /> */}

      <MenuItem
        type='icon'
        variant='secondary'
        icon={Sun}
        label='Dark Mode'
        link='/settings'
        aria-label='Alternar tema escuro/claro'
        title='Alternar tema'
        onClick={handleChangeTheme}
      />
    </nav>
  );
}
