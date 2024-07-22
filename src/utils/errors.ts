/**
 * @param serverError: string
 * @returns human readable error
 */
export function getErrorMessage(serverError: string): string {
	console.log(serverError);
	return SERVER_ERRORS.find((error) => error.serverError === serverError)?.message || serverError;
}

/**
 * My hope is that one day I can create something like codes
 * that I can pass from server to this thingy, and this way
 * I can dictate the messages
 */
const SERVER_ERRORS = [
	{
		serverError: "Internal server error", // temporary, remove it after backend validation is fixed
		message: "Името на дружеството или ЕИК, номера вече са ползвани за регистрация.",
	},
	{
		serverError: "Wrong credentials",
		message: "Грешно потребителско име или парола.",
	},
	{
		serverError: "Please complete registration before you try to sign in",
		message:
			"Моля завършете регистрацията си преди да се опитате да се впишате. Ще имате съобщение на вашата поща с линк към формата за регистрация.",
	},
	{
		serverError: "User is already registered",
		message: "Служителят вече е регистриран.",
	},
];
