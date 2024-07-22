export interface CreateCompany {
	name: string;
	uic: string;
	employees: Array<{
		email: string;
		roleId: number;
	}>;
}
