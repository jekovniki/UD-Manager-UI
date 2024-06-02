import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownOptions } from "@/interfaces/base";
import { InputProps } from "./ui/input";

export interface DefaultDropdownMenu extends InputProps {
    iconClass: string,
    label: string,
    wrapperClassName?: string,
    options: DropdownOptions[],
    value: string,
    selectCallback: (value: string) => void
}

export const DropdownBox = React.forwardRef<HTMLInputElement, DefaultDropdownMenu>(
    ({ value = "", options = [], placeholder,  wrapperClassName = "", label = "", iconClass = "", required = false, selectCallback }) => {
        return (
            <div className={"flex items-center border border-indigo-100 rounded w-100 p-2 relative " + wrapperClassName}>
                <div className="w-2/12 max-w-[54px] flex items-center justify-around">
                    {iconClass ? <i className={`${iconClass} text-2xl`} style={{ lineHeight: '1.25rem' }}></i> : ""}
                </div>
                <div className="w-10/12">
                    <label className="text-gray-700 text-sm font-normal leading-none mt-1">
                        {label} {required ? <span className="text-red-500">*</span> : ""}
                    </label>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-full">
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-gray-700 text-base">{value ? value : placeholder}</span> <i className="ud-back rotate-[-90deg]"></i>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {options.map((option) => (
                                    <DropdownMenuItem
                                        className="text-base w-full"
                                        key={option.key}
                                        onClick={() => selectCallback(option.value)}
                                    >
                                        {option.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        )
    }
);
