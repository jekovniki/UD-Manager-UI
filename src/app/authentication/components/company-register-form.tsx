import { DropdownBox } from "@/components/dropdown-box";
import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { UploadImage } from "@/components/upload-image";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const CompanyRegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    console.log(errors);

    const onSubmit = async (data: any) => {
        console.log(data);
        navigate("/");
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
                        {...register('name', {
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
                <div className="flex sm:flex-row flex-column items-center">
                    <div className="flex-1">
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
                    <div className="flex-1">
                        <InputBox
                            wrapperClassName="rounded-l-none"
                            id="accessLevel"
                            iconClass="ud-company"
                            label="Ниво на достъп"
                            type="accessLevel"
                            autoComplete="accessLevel"
                            placeholder="Супер Админ"
                            disabled
                        />
                    </div>
                </div>
                <div className="text-base label-color mb-2 mt-6">Служители</div>
                <div className="flex sm:flex-row flex-column items-center">
                    <div className="flex-1">
                        <InputBox
                            id="email"
                            type="email"
                            iconClass="ud-at-sign"
                            label="Имейл адрес"
                            autoComplete="email"
                            placeholder="Имейл на служителя"
                            required
                            {...register('email', {
                                required: true
                            })}
                            wrapperClassName="rounded-r-none"
                        />
                    </div>
                    <div className="flex-1">
                        <DropdownBox
                            wrapperClassName="rounded-l-none"
                            id="accessLevel"
                            iconClass="ud-company"
                            label="Ниво на достъп"
                            type="accessLevel"
                            autoComplete="accessLevel"
                            placeholder="Супер Админ"
                            disabled
                        />
                    </div>
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