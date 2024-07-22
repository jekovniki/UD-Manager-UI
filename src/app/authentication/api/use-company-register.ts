import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthenticationQueryKeys } from "./query-keys";
import { companyApi } from "@/app/company/api/services";
import { CreateCompany } from "@/app/company/dtos/create";

export function useCompanyRegister() {
	const client = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateCompany) => companyApi.post("/", data),
		onSuccess: () => client.invalidateQueries(AuthenticationQueryKeys.CompanyRegister as InvalidateQueryFilters),
	});
}
