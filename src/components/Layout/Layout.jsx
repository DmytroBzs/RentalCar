import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import AppHeader from '../AppHeader/AppHeader';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <AppHeader />
      {children}
    </Suspense>
  );
};

export default Layout;
