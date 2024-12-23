import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { MyAppBar } from './MyAppBar/MyAppBar';

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <MyAppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
