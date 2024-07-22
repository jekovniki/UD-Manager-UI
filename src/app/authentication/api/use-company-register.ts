import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthenticationQueryKeys } from "./query-keys";

const mockApi = (data: unknown): Promise<{ data: string }> => {
	console.log("mockApi data: ", data);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ data: "Hello world!" });
		}, 5000);
	});
};

export function useCompanyRegister() {
	const client = useQueryClient();

	return useMutation({
		mutationFn: mockApi,
		onSuccess: () => client.invalidateQueries(AuthenticationQueryKeys.CompanyRegister as InvalidateQueryFilters),
	});
}
