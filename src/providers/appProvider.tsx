import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { queryClient } from '@/lib/react-query';
// import { AuthProvider } from '@/providers/authProvider';
import { defaultTheme } from '@/theme';

// import { Notifications } from '@/components/Notifications';
// import { SplashScreen } from '@/components/SplashScreen';

interface AppProviderProps {
  children: React.ReactNode;
}

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Ooops, something went wrong :( </h2>
      <button
        type="button"
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // <React.Suspense fallback={<SplashScreen />}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools /> */}
            {/* <Notifications /> bullet-proof */}
            {/* <AuthProvider> */}
            <ChakraProvider theme={defaultTheme}>
              <Router>
                {/* <I18nextProvider i18n={i18next}> */}
                {/* <Notifications /> */}
                {children}
                {/* </I18nextProvider> */}
              </Router>
            </ChakraProvider>
            {/* </AuthProvider> */}
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
