import { Link, NavLink } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import css from './AppHeader.module.css';
import clsx from 'clsx';

const { Header } = Layout;

const NavLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppHeader = () => {
  return (
    <Header className={css.header}>
      <Link to="/" className={css.logo}>
        <Typography.Text strong className={css.rental}>
          Rental
        </Typography.Text>
        <Typography.Text className={css.car}>Car</Typography.Text>
      </Link>
      <div className={css.navLinks}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog" className={NavLinkStyle}>
          Catalog
        </NavLink>
      </div>
    </Header>
  );
};

export default AppHeader;
