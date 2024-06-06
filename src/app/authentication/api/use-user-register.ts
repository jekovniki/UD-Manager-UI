import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthenticationQueryKeys } from "./query-keys";

const mockApi = (data: any): Promise<any> => {
    console.log('mockApi data: ', data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Hello world!' })
        }, 5000);
    });
}

export function useUserRegister() {
    const client = useQueryClient();

    return useMutation({
        mutationFn: mockApi,
        onSuccess: () => client.invalidateQueries(AuthenticationQueryKeys.EmployeeRegister as any)
    })
}