import { useState } from "react";
import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { UploadImage } from "@/components/upload-image";
import { useForm } from "react-hook-form";
import { CompanyRegisterEmployees } from "./company-register-employees";
import { EmployeeRoles } from "@/interfaces/authentication";


export const CompanyRegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [employees, setEmployees] = useState<{ role: EmployeeRoles, email: string }[]>([]);
    const onSubmit = async (data: any) => {
        console.log('submit-data : ', {
            ...data,
            employees: employees
        });
    }

    const handleFile = (event: any) => { 
        // @todo: add logic when beckend is ready
        console.log('Handle File to be implemented :', event);
    }

    return (
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
                            {...register('name', {
                                required: true,
                                minLength: {
                                    value: 3,
                                    message: "Името трябва да съдържа поне 3 букви"
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
                        {...register('uic', {
                            required: true,
                            minLength: {
                                value: 5,
                                message: "ЕИК номера трябва да съдържа поне 5 цифри"
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
                            {...register('email', {
                                required: true
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
                <CompanyRegisterEmployees employees={employees} setEmployees={setEmployees} />
            </div>
            <div className="px-8">
                {errors?.password?.message && <p className="text-red-500 text-xs italic">{errors?.password?.message as string}</p>}
            </div>
            <div className="w-full px-8 pt-4 pb-4 text-right border border-slate-200 border-t-1 border-b-0 border-l-0 border-r-0" >
                <Button type="submit" className="px-14 py-none h-[50px] text-sm" variant="default">Регистрирай</Button>
            </div>
        </form>
    )
}