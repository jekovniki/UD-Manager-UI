import { useState } from "react";
import { DropdownBox } from "@/components/dropdown-box";
import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { UploadImage } from "@/components/upload-image";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type EmployeeRoles = 'super-admin' | 'admin' | 'moderator' | 'employee';

export const CompanyRegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [employees, setEmployees] = useState<{ role: EmployeeRoles, email: string}[]>([]);
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        console.log('submit-data : ', {
            ...data,
            employees: employees
        });
        navigate("/");
    }

    const addEmployee = () => {
        // if (employeeRole !== 'super-admin' || 'admin' || 'moderator' || 'employee') {
        //     console.error('Invalid employee role type')
        //     return;
        // }

        setEmployees([...employees, { email: employeeEmail, role: employeeRole }]);
        setEmployeeRole('');
        setEmployeeEmail('')
    }

    const removeEmployee = (email: string) => {
        setEmployees(employees.filter(employee => employee.email !== email))
    }

    const handleRoleChange = (role: EmployeeRoles) => {
        setEmployeeRole(role);
    }

    return (
        <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row items-center mb-6 px-8 pt-8">
                <div className="basis-1/6 min-w-[11rem] mr-4 h-[148px]">
                    <UploadImage handleFile={() => {}} />
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
            <div className="w-full px-8 pb-8">
                <div className="text-base label-color mb-2">Супер Администратор (Собственик на профила)</div>
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
                            onClick={(event: any) => {setEmployeeEmail(event.target.value)}}
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
                            value="Супер Админ"
                            disabled
                        />
                    </div>
                </div>
                <div className="text-base label-color mb-2 mt-6">Служители</div>
                <div className="flex sm:flex-row flex-col items-center">
                    <div className="sm:flex-1 w-full">
                        <InputBox
                            id="email-employee"
                            type="email"
                            iconClass="ud-at-sign"
                            label="Имейл адрес"
                            autoComplete="email-employee"
                            placeholder="Имейл на служителя"
                            wrapperClassName="rounded-r-none"
                            onKeyUp={(event: any) => { setEmployeeEmail(event.target.value)} }
                        />
                    </div>
                    <div className="sm:flex-1 w-full">
                        <DropdownBox
                            wrapperClassName="rounded-l-none sm:border-l-0"
                            id="accessLevel"
                            iconClass="ud-company"
                            label="Ниво на достъп"
                            type="accessLevel"
                            value={employeeRole}
                            options={[{
                                key: "admin",
                                value: 'Администратор',
                                label: 'Администратор'
                            }, {
                                key: 'user',
                                value: 'Служител',
                                label: 'Служител'
                            }, {
                                key: 'manager',
                                value: 'Ръководител',
                                label: 'Ръководител'
                            }]}
                            autoComplete="accessLevel"
                            placeholder="Администратор"
                            selectCallback={handleRoleChange}
                            disabled
                        />
                    </div>
                </div>
                <div className="mt-3 flex justify-end">
                    <Button
                        type="button"
                        variant='default'
                        className="h-[40px] w-[120px] text-sm"
                        onClick={addEmployee}
                        style={{fontWeight: '300'}}>
                        Добави
                    </Button>
                </div>
                <div className="flex flex-col items-center mt-6">
                    { employees.map((employee, index) => 
                    <div key={index} className="flex items-center w-full justify-between p-4 mb-4 bg-secondary rounded-sm">
                        <div className="flex items-center">
                            <i className='ud-at-sign text-2xl w-10' style={{lineHeight: '1.25rem'}}></i>
                            <div className="text-sm">
                                <p><strong>{ employee.email }</strong></p>
                                <p className="text-gray-500">{ employee.role }</p>
                            </div>
                        </div>
                        <div>
                            <i className="ud-trash-can label-color text-2xl cursor-pointer hover:text-red-500" onClick={() => { removeEmployee(employee.email)}}></i>
                        </div>
                    </div>
                    )}
                </div>
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