import { FC, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRefreshToken } from "@/app/authentication/api/use-refresh-token";
import { publicRoutes } from "@/pages/router";
import { AuthenticatedContext, LoginResponse } from "@/app/authentication/dtos/authentication";
import { AuthContext } from "./auth-context";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const navigate = useNavigate();
	const { mutate } = useRefreshToken();
	const [user, setUser] = useState<LoginResponse | null>(null);
	const [isAuthorized, setIsAuthorized] = useState(false);

	const login = (userData: LoginResponse) => {
		setUser(userData);
		setIsAuthorized(true);
	};

	const logout = () => {
		setUser(null);
		setIsAuthorized(false);
		navigate(publicRoutes.find((route) => route.name === "Login")?.route || "/");
	};

	const refreshAccessToken = async () => {
		mutate(undefined, {
			onError: (error) => {
				console.error(error);
				logout();
			},
		});
	};

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		console.log("isAuthorized : ", isAuthorized);
		if (isAuthorized) {
			const interval = setInterval(refreshAccessToken, 14 * 60 * 1000); // 14 minutes
			return () => clearInterval(interval);
		}
	}, [isAuthorized]);

	const value: AuthenticatedContext = {
		user,
		isAuthorized,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
