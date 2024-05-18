export type EmployeeRoles = 'admin' | 'employee';

export interface RegisterEmployee {
    email: string,
    role: EmployeeRoles
}