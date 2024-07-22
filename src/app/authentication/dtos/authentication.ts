export interface RegisterEmployee {
	email: string;
	roleId: number;
}

export interface RegisterCompany {
	name: string;
	uic: string;
	employees: RegisterEmployee[];
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface LoginResponse {
	firstName: string;
	lastName: string;
	email: string;
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

export interface AuthenticatedContext {
	user: LoginResponse | null;
	isAuthorized: boolean;
	login: (userData: LoginResponse) => void;
	logout: () => void;
}
