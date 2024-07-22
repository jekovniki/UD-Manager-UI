import { UserRegisterForm } from "@/app/authentication/components/user-register-form";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";

const UserRegister = () => {
	const [searchParams] = useSearchParams();
	const email = searchParams.get("email");
	const rt = searchParams.get("rt");
	searchParams.delete("email");
	searchParams.delete("rt");

	return (
		<main className="min-h-screen flex items-center p-4">
			<Card className="mx-auto max-w-[37.75rem] w-full rounded-sm shadow-2xl border-transparent">
				<div className="mt-4 w-full sm:mx-auto">
					<UserRegisterForm email={email || ""} refreshToken={rt || ""} />
				</div>
			</Card>
		</main>
	);
};

export default UserRegister;
