import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const UserRegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    console.log(errors);

    const onSubmit = async (data: any) => {
        console.log(data);
        navigate("/");
    }

    return (
        <form className="w-full py-2 border border-slate-200 border-t-1 border-b-0 border-l-0 border-r-0" onSubmit={handleSubmit(onSubmit)}>
            <div className="py-6 px-8">
                <InputBox
                    id="firstName"
                    type="text"
                    iconClass="ud-autograph"
                    label="Име"
                    autoComplete="firstName"
                    placeholder="Вашето име"
                    required
                    wrapperClassName="mb-2"
                    {...register('firstName', {
                        required: true,
                    })}
                />
                <InputBox
                    id="lastName"
                    type="text"
                    iconClass="ud-autograph"
                    label="Фамилия"
                    autoComplete="firstName"
                    placeholder="Вашата фамилия"
                    wrapperClassName="mb-2"
                />
                <InputBox
                    id="position"
                    type="text"
                    iconClass="ud-company"
                    label="Позиция"
                    autoComplete="job"
                    placeholder="Позиция в компанията"
                    wrapperClassName="mb-2"

                />
                <InputBox
                    id="password"
                    iconClass="ud-password"
                    label="Парола"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Въведете парола"
                    wrapperClassName="mb-2"
                    required
                    {...register('password', {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "Паролата трябва да съдържа поне 8 символа"
                        },
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                            message: "Паролата трябва да съдържа поне едna главна буква, една малка буква, едно число и един специален символ"
                        }

                    })}
                />
                <InputBox
                    id="cofirmPassword"
                    iconClass="ud-password"
                    label="Потвърдете паролата"
                    type="password"
                    autoComplete="confirm-password"
                    placeholder="Въведете паролата отново"
                    wrapperClassName="mb-2"
                    required
                    {...register('confirmPassword', {
                        required: true,
                        validate: (input: string) => {
                            if(watch('password') !== input) {
                                return "Паролата не съвпада с горното поле"
                            }
                        }

                    })}
                />
                <div>
                    {errors?.password?.message && <p className="text-red-500 text-xs italic">{errors?.password?.message as string}</p>}
                    {errors?.confirmPassword?.message && <p className="text-red-500 text-xs italic">{errors?.confirmPassword?.message as string}</p>}
                </div>
            </div>
            <div className="w-full px-8 pt-6 pb-4 text-right border border-slate-200 border-t-1 border-b-0 border-l-0 border-r-0" >
                <Button type="submit" className="px-14 py-none h-[50px] text-sm" variant="default">Регистрация</Button>
            </div>
        </form>
    )
}