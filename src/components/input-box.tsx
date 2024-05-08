import React from "react";
import { InputProps } from "./ui/input";
import { Input } from "@/components/ui/input";

export interface DefaultInput
    extends InputProps {
    iconClass: string,
    label: string
}

export const InputBox = React.forwardRef<HTMLInputElement, DefaultInput>(
    ({ id, className, autoComplete, type, label = "", iconClass = "", placeholder = "", required = false, ...props }, ref) => {
        return (
            <div className="flex items-center border border-indigo-100 rounded w-100 p-2">
                <div className="w-2/12 flex items-center justify-around">
                    {iconClass ? <i className={`${iconClass} text-2xl`} style={{lineHeight: '1.25rem'}}></i> : ""}
                </div>
                <div className="w-10/12">
                    <label className="text-gray-700 text-sm font-normal leading-none mt-1">{label}</label>
                    <Input
                        id={id}
                        type={type}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        required={required}
                        className="block w-full rounded border-0 p-0 h-auto leading-none text-gray-900 placeholder-gray-400 text-base focus-visible:border-0"
                    />
                </div>
            </div>
        )
    }
)

