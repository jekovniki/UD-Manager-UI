import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { TRoutes } from "@/dtos/routes";
import { publicRoutes, platformRoutes, platformRoutesCustom } from "./pages/router";
import { THEME_STORAGE_KEY } from "./utils/constants";
import { ErrorBoundary } from "react-error-boundary";
import { DefaultErrorBoundary } from "./components/error-boundary";
import { ErrorInfo } from "react";
import NotFound from "./pages/not-found";
import PlatformLayout from "./layouts/platform";
import { ProtectedRoute } from "./app/authentication/components/protected-route";

function App() {
	const logError = (error: Error, info: ErrorInfo) => {
		console.error(error);
		console.info(info);
	};

	const setRoutes = (routes: TRoutes[]) => {
		return routes.map(({ route, component, key }) => <Route path={route} element={component} key={key} />);
	};
	return (
		<ErrorBoundary FallbackComponent={DefaultErrorBoundary} onError={logError}>
			<ThemeProvider defaultTheme="light" storageKey={THEME_STORAGE_KEY}>
				<Routes>
					<Route element={<PlatformLayout />}>
						<Route element={<ProtectedRoute />}>{setRoutes(platformRoutes)}</Route>
					</Route>
					{setRoutes(platformRoutesCustom)}
					{setRoutes(publicRoutes)}
					<Route path="/404" element={<NotFound />} key="not-found" />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			</ThemeProvider>
		</ErrorBoundary>
	);
}

export default App;
