export interface UserRegistrationRequest extends UserRegistration {
	email: string;
	refreshToken: string;
}

export interface UserRegistration {
	firstName: string;
	lastName: string;
	position: string;
	password: string;
}

export interface UserRegistrationForm extends UserRegistration {
	confirmPassword: string;
}
