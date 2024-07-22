import { ChangeEvent, useState } from "react";
import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { UploadImage } from "@/components/upload-image";
import { useForm } from "react-hook-form";
import { CompanyRegisterEmployees } from "./company-register-employees";
import { useCompanyRegister } from "../api/use-company-register";
import LoaderContainer from "@/containers/loader";
import { BaseCompanyEmployee } from "@/app/company/dtos/create";
import { useRoles } from "../api/use-roles";
import { SuccessCompanyRegistrationTemplate } from "../data/success-company-registration";

interface RegisterCompanySubmit {
	name: string;
	uic: string;
	email: string;
}

export const CompanyRegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterCompanySubmit>();
	const [employees, setEmployees] = useState<BaseCompanyEmployee[]>([]);
	const { mutate, isPending, isSuccess } = useCompanyRegister();
	const roles = useRoles();

	const roleOptions = roles?.data || [];
	console.error(errors);
	const onSubmit = async (data: RegisterCompanySubmit) => {
		mutate(
			{
				...data,
				employees: [
					...employees,
					{
						email: data.email,
						roleId: roleOptions.find((role) => role.name === "Administrator")?.id || 1,
					},
				],
			},
			{
				onSuccess: () => {},
				onError: () => {},
			},
		);
	};

	const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
		// @todo: add logic when beckend is ready
		console.log("Handle File to be implemented :", event);
	};

	return (
		<LoaderContainer
			isLoading={isPending}
			message={
				<p className="text-center mb-8">Моля изчакайте докато системата ви регистрира. Това би следвало да отнеме няколко секунди.</p>
			}
		>
			<>
				{" "}
				{isSuccess ? (
					<SuccessCompanyRegistrationTemplate />
				) : (
					<form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-row items-center mb-6 px-8 pt-8">
							<div className="basis-1/6 min-w-[11rem] mr-4 h-[148px]">
								<UploadImage handleFile={handleFile} />
							</div>
							<div className="basis-5/6">
								<div className="mb-4">
									<InputBox
										id="name"
										type="text"
										iconClass="ud-company"
										label="Име"
										autoComplete="name"
										placeholder="Името на компанията"
										required
										{...register("name", {
											required: true,
											minLength: {
												value: 3,
												message: "Името трябва да съдържа поне 3 букви",
											},
										})}
									/>
								</div>
								<InputBox
									id="uic"
									type="text"
									iconClass="ud-autograph"
									label="ЕИК"
									autoComplete="uic"
									placeholder="ЕИК на компанията"
									required
									{...register("uic", {
										required: true,
										minLength: {
											value: 5,
											message: "ЕИК номера трябва да съдържа поне 5 цифри",
										},
									})}
								/>
							</div>
						</div>
						<div className="w-full px-8 pb-0">
							<div className="text-base label-color mb-2">Администратор (Собственик на профила)</div>
							<div className="flex sm:flex-row flex-col items-center">
								<div className="sm:flex-1 w-full">
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
										wrapperClassName="rounded-r-none"
									/>
								</div>
								<div className="sm:flex-1 w-full">
									<InputBox
										wrapperClassName="rounded-l-none sm:border-l-0"
										id="accessLevel"
										iconClass="ud-company"
										label="Ниво на достъп"
										type="accessLevel"
										autoComplete="accessLevel"
										value="Администратор"
										disabled
									/>
								</div>
							</div>
							<CompanyRegisterEmployees employees={employees} setEmployees={setEmployees} roles={roleOptions} />
						</div>
						<div className="px-8">
							{/** put the errors here */}
							{/* {errors?.password?.message && <p className="text-red-500 text-xs italic">{errors?.password?.message as string}</p>} */}
						</div>
						<div className="w-full px-8 pt-4 pb-4 text-right border border-slate-200 border-t-1 border-b-0 border-l-0 border-r-0">
							<Button type="submit" className="px-14 py-none h-[50px] text-sm" variant="default">
								Регистрирай
							</Button>
						</div>
					</form>
				)}
			</>
		</LoaderContainer>
	);
};
