export interface CreateCompany {
	name: string;
	uic: string;
	employees: BaseCompanyEmployee[];
}

export interface BaseCompanyEmployee {
	email: string;
	roleId: number;
}
