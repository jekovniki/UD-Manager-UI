import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "./services";
import { AuthenticationQueryKeys } from "./query-keys";

export function useRefreshToken() {
	const client = useQueryClient();

	return useMutation({
		mutationFn: () => authApi.post("/refresh", {}),
		onSuccess: () => client.invalidateQueries(AuthenticationQueryKeys.Token as InvalidateQueryFilters),
	});
}
