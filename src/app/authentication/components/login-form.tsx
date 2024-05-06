import { InputBox } from "@/components/input-box";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} method="POST">
            <InputBox 
                icon="@" 
                label="Имейл адрес"
                autoComplete="email"
                placeholder="Вашият имейл адрес"
                required
                {...register('email', { 
                    required: true
                })}
            />
            <InputBox 
                id="password"
                icon=""
                label="Парола"
                type="password"
                autoComplete="current-password"
                placeholder="Въведете парола"
                required
                {...register('password', { 
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
                })}
            />
            {/* <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Имейл адрес
                </label>
                <div className="mt-2">
                    <Input
                        id="email-2"
                        type="email"
                        autoComplete="email"
                        placeholder="Вашият имейл адрес"
                        required
                        {...register('email', { 
                            required: true
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div> */}
            {/* </div> */}
            {/* </div> */}

            {/* <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Парола
                    </label>
                </div>
                <div className="mt-2">
                    <Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Въведете парола"
                        required
                        {...register('password', { 
                            required: true,
                            minLength: 8,
                            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div> */}
            <div>
                { errors?.password && <p className="text-red-500 text-xs italic">Password must be at least 8 characters long and must contain at least one uppercase letter,
			one lowercase letter, one number, and one special character</p> }
            </div>
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Вход
                </button>
            </div>
        </form>
    )
}