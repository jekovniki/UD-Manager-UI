import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownOption } from "@/dtos/base";
import { InputProps } from "./ui/input";

export interface DefaultDropdownMenu extends InputProps {
	iconClass: string;
	label: string;
	wrapperClassName?: string;
	options: DropdownOption[];
	selectCallback: (value: DropdownOption) => void;
}

export const DropdownBox = React.forwardRef<HTMLInputElement, DefaultDropdownMenu>(
	({ options = [], placeholder, wrapperClassName = "", label = "", iconClass = "", required = false, selectCallback }) => {
		const [selected, setSelected] = React.useState("");

		const handleSelect = (option: DropdownOption) => {
			setSelected(option.label);
			selectCallback(option);
		};
		return (
			<div className={"flex items-center border border-indigo-100 rounded w-100 p-2 relative " + wrapperClassName}>
				<div className="w-2/12 max-w-[54px] flex items-center justify-around">
					{iconClass ? <i className={`${iconClass} text-2xl`} style={{ lineHeight: "1.25rem" }}></i> : ""}
				</div>
				<div className="w-10/12">
					<label className="text-gray-700 text-sm font-normal leading-none mt-1">
						{label} {required ? <span className="text-red-500">*</span> : ""}
					</label>
					<div>
						<DropdownMenu>
							<DropdownMenuTrigger className="w-full">
								<div className="flex items-center justify-between w-full">
									<span className="text-gray-700 text-base">{selected ? selected : placeholder}</span>{" "}
									<i className="ud-back rotate-[-90deg]"></i>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								{options.map((option) => (
									<DropdownMenuItem
										className="text-base w-full"
										key={option.key}
										onClick={() => {
											handleSelect(option);
										}}
									>
										{option.label}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		);
	},
);
