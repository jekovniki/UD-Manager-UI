import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { FundsQueryKeys } from "./query-keys";

const mockApi = (data: unknown): Promise<unknown> => {
    console.log('mockApi data: ', data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Hello world!' })
        }, 5000);
    });
}

export function useAddFund() {
    const client = useQueryClient();

    return useMutation({
        mutationFn: mockApi,
        onSuccess: () => client.invalidateQueries(FundsQueryKeys.Funds as InvalidateQueryFilters)
    })
}