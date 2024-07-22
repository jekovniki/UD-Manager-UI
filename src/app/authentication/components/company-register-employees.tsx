import { ChangeEvent, useState } from "react";
import { InputBox } from "@/components/input-box";
import { DropdownBox } from "@/components/dropdown-box";
import { Button } from "@/components/ui/button";
import { RegisterEmployee } from "../dtos/authentication";

export const CompanyRegisterEmployees = ({
	employees = [],
	setEmployees,
}: {
	employees: RegisterEmployee[];
	setEmployees: React.Dispatch<
		React.SetStateAction<
			{
				roleId: number;
				email: string;
			}[]
		>
	>;
}) => {
	const [email, setEmail] = useState("");
	const [roleId, setRoleId] = useState<number>(1);
	const isValidEmail = email && email.includes("@");
	const ROLES = [
		{
			key: "admin",
			value: "1",
			label: "Администратор",
		},
		{
			key: "employee",
			value: "2",
			label: "Служител",
		},
	];

	const addEmployee = () => {
		setEmployees([...employees, { email, roleId }]);
		setRoleId(1);
		setEmail("");
	};
	const removeEmployee = (email: string) => {
		setEmployees(employees.filter((employee: RegisterEmployee) => employee.email !== email));
	};

	const handleRoleChange = (selectedRole: string) => {
		setRoleId(Number(selectedRole));
	};

	return (
		<>
			<div className="text-base label-color mb-2 mt-6">Служители</div>
			<div className="flex sm:flex-row flex-col items-center">
				<div className="sm:flex-1 w-full">
					<InputBox
						id="email-employee"
						type="email"
						iconClass="ud-at-sign"
						label="Имейл адрес"
						value={email}
						autoComplete="email-employee"
						placeholder="Имейл на служителя"
						wrapperClassName="rounded-r-none"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setEmail(event.target.value);
						}}
					/>
				</div>
				<div className="sm:flex-1 w-full">
					<DropdownBox
						wrapperClassName="rounded-l-none sm:border-l-0"
						id="accessLevel"
						iconClass="ud-company"
						label="Ниво на достъп"
						type="accessLevel"
						value={roleId.toString()}
						options={ROLES}
						autoComplete="accessLevel"
						placeholder="Изберете ниво на достъп"
						selectCallback={handleRoleChange}
						disabled
					/>
				</div>
			</div>
			<div className="mt-3 flex justify-end">
				<Button
					type="button"
					variant="default"
					className="h-[40px] w-[120px] text-sm"
					onClick={addEmployee}
					disabled={!isValidEmail || !roleId}
					style={{ fontWeight: "300" }}
				>
					Добави
				</Button>
			</div>
			<div className="flex flex-col items-center mt-4">
				{employees.map((employee: RegisterEmployee, index: number) => (
					<div key={index} className="flex items-center w-full justify-between p-4 mb-4 bg-secondary rounded-sm">
						<div className="flex items-center">
							<i className="ud-at-sign text-2xl w-10" style={{ lineHeight: "1.25rem" }}></i>
							<div className="text-sm">
								<p>
									<strong>{employee.email}</strong>
								</p>
								<p className="text-gray-500">{ROLES.find((role) => role.value === employee.roleId.toString() || "")?.label}</p>
							</div>
						</div>
						<div>
							<i
								className="ud-trash-can label-color text-2xl cursor-pointer hover:text-red-500"
								onClick={() => {
									removeEmployee(employee.email);
								}}
							></i>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
