"use client";

import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { toast } = useToast();

    const onSubmit = (data: any) => {
        console.log(data);
        toast({
            title: "Successfully signed in!",
            description: "You have signed in successfully. Redirecting to homepage."
        })

        setTimeout(() => {
            navigate("/");
        }, 1000);
    }

    return (
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
                { errors?.password?.message && <p className="text-red-500 text-xs italic">{ errors?.password?.message as string }</p> }
            </div>
            <div>
                <Button type="submit" className="w-full" variant="default">Вход</Button>
            </div>
        </form>
    )
}