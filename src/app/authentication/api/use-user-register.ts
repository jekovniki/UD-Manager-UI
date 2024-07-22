import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthenticationQueryKeys } from "./query-keys";
import { authApi } from "./services";
import { UserRegistrationRequest } from "../dtos/user-register";

export function useUserRegister() {
	const client = useQueryClient();

	return useMutation({
		mutationFn: (data: UserRegistrationRequest) =>
			authApi.post("/sign-up/local", {
				...data,
				password: btoa(data.password),
			}),
		onSuccess: () => client.invalidateQueries(AuthenticationQueryKeys.EmployeeRegister as InvalidateQueryFilters),
	});
}
