import { AppProvider } from '@/providers/appProvider';
import { AppRoutes } from '@/routes';
// import { globalStyles } from '@/styles/globalStyles';

function App() {
  // globalStyles();

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
