import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api/use-login";
import LoaderContainer from "@/containers/loader";
import { LoginCredentials } from "../dtos/authentication";

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginCredentials>();
	const { mutate, isPending } = useLogin();
	const navigate = useNavigate();

	const onSubmit = (data: LoginCredentials) => {
		mutate(data, {
			onSuccess: () => {
				navigate("/aug/home");
			},
			onError: (error) => console.error(error),
		});
	};

	return (
		<LoaderContainer
			isLoading={isPending}
			message={<p className="text-center mb-8">Моля изчакайте докато системата ви впише. Това би следвало да отнеме няколко секунди.</p>}
		>
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-none mb-6 text-2xl font-extralight leading-9 tracking-tight text-gray-900">Здравейте!</h2>
			</div>
			<div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
					<InputBox
						id="email"
						type="email"
						iconClass="ud-at-sign"
						label="Имейл адрес"
						autoComplete="email"
						placeholder="Вашият имейл адрес"
						required
						{...register("email", {
							required: true,
						})}
					/>
					<InputBox
						id="password"
						iconClass="ud-password"
						label="Парола"
						type="password"
						autoComplete="current-password"
						placeholder="Въведете парола"
						required
						{...register("password", {
							required: true,
							minLength: {
								value: 8,
								message: "Паролата трябва да съдържа поне 8 символа",
							},
							pattern: {
								value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
								message: "Паролата трябва да съдържа поне едna главна буква, една малка буква, едно число и един специален символ",
							},
						})}
					/>
					<div>{errors?.password?.message && <p className="text-red-500 text-xs italic">{errors?.password?.message as string}</p>}</div>
					<div>
						<Button type="submit" className="w-full" variant="default">
							Вход
						</Button>
					</div>
				</form>
			</div>
			<div className="text-right mt-8">
				<a href="/" className="color-link">
					Забравена парола?
				</a>
			</div>
		</LoaderContainer>
	);
};
