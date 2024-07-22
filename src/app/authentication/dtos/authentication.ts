export interface RegisterEmployee {
	email: string;
	roleId: number;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface LoginResponse {
	role: RoleData;
}

export interface RoleData {
	id: number;
	name: string;
	permissions: Permission[];
}

export interface Permission {
	id: number;
	feature: string;
	permission: "READ" | "UPDATE" | "CREATE" | "DELETE"; // maybe change it to enum if necessary
}
