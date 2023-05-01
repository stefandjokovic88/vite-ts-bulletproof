import { useRoutes } from 'react-router-dom';

// import { useAuth } from '@/providers/authProvider';

// import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  // const auth = useAuth();

  // const routes = auth.user ? protectedRoutes : publicRoutes;
  const routes = publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
