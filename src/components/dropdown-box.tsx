import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SelectOptions } from "@/interfaces/base";



export const DropdownBox = React.forwardRef<HTMLInputElement, any>(
    ({value, options = [], wrapperClassName = "", label = "", iconClass = "", required = false }) => {
        return (
            <div className={"flex items-center border border-indigo-100 rounded w-100 p-2 relative" + wrapperClassName}>
                <div className="w-2/12 max-w-[54px] flex items-center justify-around">
                    {iconClass ? <i className={`${iconClass} text-2xl`} style={{ lineHeight: '1.25rem' }}></i> : ""}
                </div>
                <div className="w-10/12">
                    <label className="text-gray-700 text-sm font-normal leading-none mt-1">{label} {required ? <span className="text-red-500">*</span> : ""}</label>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div>
                                    <span>{value}</span> <i className="ud-back"></i></div></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {(options as SelectOptions[]).map((option) => 
                                    <DropdownMenuItem key={option.key}>{ option.value }</DropdownMenuItem>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        )
    }
)

