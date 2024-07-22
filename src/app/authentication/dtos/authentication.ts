export type EmployeeRoles = "admin" | "employee";

export interface RegisterEmployee {
	email: string;
	role: EmployeeRoles;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface LoginResponse {
	role: Role;
}

export interface Role {
	id: number;
	name: string;
	permissions: Permission[];
}

export interface Permission {
	id: number;
	feature: string;
	permission: "READ" | "UPDATE" | "CREATE" | "DELETE"; // maybe change it to enum if necessary
}
