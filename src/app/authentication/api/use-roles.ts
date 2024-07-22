import { useQuery } from "@tanstack/react-query";
import { AuthenticationQueryKeys } from "./query-keys";
import FetchAPI from "@/utils/fetch";
import { RoleResponse } from "../dtos/role";

/**
 * @note : if found necessary, move this to separate folder
 */

const roleApi = new FetchAPI("roles");

export function useRoles() {
	return useQuery<RoleResponse[], Error>({
		queryKey: [AuthenticationQueryKeys.Role],
		queryFn: () => roleApi.get("/"),
	});
}
