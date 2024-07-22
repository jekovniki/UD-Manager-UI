import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { publicRoutes } from "@/pages/router";

export const ProtectedRoute: React.FC<{ children?: ReactNode }> = ({ children }) => {
	const { isAuthorized } = useAuth();
	console.log("isAuthorized : ", isAuthorized);
	if (!isAuthorized) {
		// Redirect to login page if not authorized
		return <Navigate to={publicRoutes.find((route) => route.name === "Login")?.route || "/"} replace />;
	}

	return <>{children}</>;
};
