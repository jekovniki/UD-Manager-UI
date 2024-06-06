import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api/use-login";
import LoaderContainer from "@/containers/loader";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { mutate, isPending } = useLogin();
    const { toast } = useToast();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        try {
            mutate(data, {
                onSuccess: () => {
                    navigate("/aug/home");
                },
                onError: error => console.error(error)
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ух! Временно приложението не работи",
                description: "Причината за тази грешка е, че временно приложението не работи. Извиняваме се за неудобството, нашите програмисти се опитват да го възстановят. Опитайте отново да извършите действието след 5 минути.",
                action: <ToastAction altText="Try again">Опитай пак</ToastAction>
            })
        }
    }

    return (
        <LoaderContainer isLoading={isPending} message={
            <p className="text-center mb-8">Моля изчакайте докато системата ви впише. Това би следвало да отнеме няколко секунди.</p>
        }>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-none mb-6 text-2xl font-extralight leading-9 tracking-tight text-gray-900">
                    Здравейте!
                </h2>
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
                        {...register('email', {
                            required: true
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
                    <div>
                        {errors?.password?.message && <p className="text-red-500 text-xs italic">{errors?.password?.message as string}</p>}
                    </div>
                    <div>
                        <Button type="submit" className="w-full" variant="default">Вход</Button>
                    </div>
                </form>
            </div>
            <div className="text-right mt-8">
                <a href="/" className="color-link">Забравена парола?</a>
            </div>
        </LoaderContainer>
    )
}