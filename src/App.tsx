import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './components/theme-provider';
import { TRoutes } from './types/base';
import { publicRoutes, platformRoutes } from './pages/router';
import { THEME_STORAGE_KEY } from './utils/constants';
import { ErrorBoundary } from 'react-error-boundary';
import { DefaultErrorBoundary } from './components/error-boundary';
import { ErrorInfo } from 'react';
import NotFound from './pages/not-found';
import PlatformLayout from './layouts/platform';

function App() {
  const queryClient = new QueryClient();

  const logError = (error: Error, info: ErrorInfo) => {
    console.error(error);
    console.info(info);
  }

  const setRoutes = (routes: TRoutes[]) => {
    return routes.map(({ route, component, key }) => <Route path={route} element={component} key={key} />);
  }
  return (
    <ErrorBoundary FallbackComponent={DefaultErrorBoundary} onError={logError}>
      <ThemeProvider defaultTheme='light' storageKey={THEME_STORAGE_KEY}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<PlatformLayout />}>
              { setRoutes(platformRoutes) }
            </Route>
            { setRoutes(publicRoutes) }
            <Route path="/404" element={<NotFound />} key="not-found" />
            <Route path="*" element={<Navigate to="/404"/>} />
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>

  )
}

export default App
