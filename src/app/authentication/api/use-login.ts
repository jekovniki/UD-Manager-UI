import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthenticationQueryKeys } from "./query-keys";
import { authApi } from "./services";
import { LoginCredentials } from "../dtos/authentication";

export function useLogin() {
	const client = useQueryClient();

	return useMutation({
		mutationFn: (credentials: LoginCredentials) =>
			authApi.post("/sign-in/local", {
				...credentials,
				password: btoa(credentials.password),
			}),
		onSuccess: () => client.invalidateQueries(AuthenticationQueryKeys.Login as InvalidateQueryFilters),
	});
}
