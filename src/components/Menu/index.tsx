import React from 'react';
import { Link } from 'react-router';
import { HomeIcon, InfoIcon, Settings, Sun } from 'lucide-react';
import styles from './styles.module.css';
import '../../styles/global.css';
import buttonStyles from '../Button/styles.module.css';
import { cn } from '../../utils/cn';

interface MenuItem {
  label: string;
  icon: React.ElementType; // Alterado para React.ElementType para que possamos passar props
  link: string;
}

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    icon: HomeIcon, // Passamos a referência do componente
    link: '/',
  },
  {
    label: 'History',
    icon: InfoIcon, // Passamos a referência do componente
    link: '/history',
  },
  {
    label: 'Settings',
    icon: Settings, // Passamos a referência do componente
    link: '/settings',
  },
];

interface MenuItemProps {
  label: string;
  type?: 'default' | 'icon' | 'text';
  variant?: 'default' | 'primary' | 'cta' | 'secondary';
  icon: React.ElementType;
  link: string;
}

const variantClasses: Record<string, string> = {
  default: buttonStyles.outlineButton,
  primary: buttonStyles.primaryButton,
  secondary: buttonStyles.secondaryButton,
  cta: buttonStyles.ctaButton,
};

function MenuItem({
  label,
  icon: Icon,
  link,
  type = 'default',
  variant = 'default',
}: MenuItemProps) {
  const className = cn(
    buttonStyles.baseButton,
    variantClasses[variant] || buttonStyles.outlineButton,
  );

  return (
    <Link
      className={className}
      to={link}
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
  return (
    <nav className={styles.menu}>
      {menuItems.map((item, index) => (
        <MenuItem
          type='text'
          key={index}
          {...item}
        />
      ))}
      {/* <MenuItem
        type='icon'
        variant='primary'
        icon={Sun}
        label='Dark Mode'
        link='/settings'
      /> */}

      {/* Login / Signup */}
      <MenuItem
        type='text'
        variant='default'
        icon={Sun}
        label='Login'
        link='/settings'
      />
      <MenuItem
        type='text'
        variant='secondary'
        icon={Sun}
        label='Sign Up'
        link='/settings'
      />
    </nav>
  );
}
