import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import { MainLayout } from '@/components/Layout';
// import { Profile } from '@/features/profile';
// import { lazyImport } from '@/utils/lazyImport';
// import { OffersListRoute } from '@/features/arrangement-list';
// import { EditListRoute } from '@/features/edit-offer';

// const { DashboardRoutes } = lazyImport(() => import('@/features/dashboard'), 'DashboardRoutes');

const App = () => {
  return (
    // <MainLayout>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
    // </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      // { path: '/account', element: <Profile /> },
      // { path: '/dashboard/*', element: <DashboardRoutes /> },
      // { path: '/offers-list', element: <OffersListRoute /> },
      // { path: '/edit/offer/:id', element: <EditListRoute /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];
