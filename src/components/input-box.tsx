import React from "react";
import { InputProps } from "./ui/input";
import { Input } from "@/components/ui/input";

export interface DefaultInput
    extends InputProps {
    icon: string,
    label: string
}

export const InputBox = React.forwardRef<HTMLInputElement, DefaultInput>(
    ({ className, type, label, icon, ...props }, ref) => {
        return (
            <div className="flex items-center border border-indigo-100 rounded-md w-100 p-2">
                <div className="w-2/12 flex items-center justify-around">
                    {icon || ''}
                </div>
                <div className="w-10/12">
                    <label className="text-gray-700 text-sm font-normal leading-none mt-1">{label}</label>
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Вашият имейл адрес"
                        required
                        className="block w-full rounded-md border-0 p-0 h-auto leading-none text-gray-900 shadow-sm placeholder-gray-400 sm:text-sm focus-visible:border-0"
                    />
                </div>
            </div>
        )
    }
)

