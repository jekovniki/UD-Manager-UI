import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FundOverviewItem } from "./fund-overview-list";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import { PieChart } from "@/components/pie-chart";

export const FundOverviewAccordion = ({
	item,
	...props
}: {
	item: FundOverviewItem;
}) => {
	function getBadgeColor(
		number: number,
	): "default" | "destructive" | "success" {
		if (number < 0) {
			return "destructive";
		}
		if (number > 0) {
			return "success";
		}

		return "default";
	}
	return (
		<AccordionItem value={item.title} {...props}>
			<AccordionTrigger className="fund-accordion-trigger hover:no-underline">
				<div className="flex fund-left">
					<div className="main-bg h-[40px] w-[40px] flex items-center justify-around rounded icon-box">
						<i className="ud-wallet text-xl label-color"></i>
					</div>
					<div className="ml-4 text-left">
						<h3 className="text-base font-normal">
							{item.title}{" "}
							<Badge
								variant={getBadgeColor(item.performance)}
								className="text-xs mt-[-5px]"
							>
								{item.performance > 0 ? "+" : ""}
								{item.performance} %
							</Badge>
						</h3>
						<h5 className="text-sm label-color font-light">
							{item.description}
						</h5>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="main-bg h-[40px] w-[40px] flex items-center justify-around rounded icon-box duration-300 hover:bg-primary">
						<i className="ud-info text-xl label-color"></i>
					</div>
					<div className="main-bg h-[40px] w-[40px] flex items-center justify-around rounded icon-box duration-300 hover:bg-primary">
						<i className="ud-pie-chart text-xl label-color"></i>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button aria-haspopup="true" size="icon" variant="ghost">
								<MoreVertical className="h-4 w-4" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuItem>Edit</DropdownMenuItem>
							<DropdownMenuItem>Delete</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</AccordionTrigger>
			<AccordionContent className="flex items-center gap-2 py-2">
				<div className="w-[250px] my-4">
					<PieChart />
				</div>
				<div className="w-full px-8">
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<span className="w-[12px] h-[12px] block rounded-full bg-amber-300 mr-2"></span>
							Пари и депозити
						</div>
						<div className="flex items-center">
							<div className="flex items-center">
								2 107 753&nbsp;<span className="text-slate-300"> лв.</span>
							</div>
							<div className="flex items-center pl-8">
								3.34&nbsp;<span className="text-slate-300">%</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<span className="w-[12px] h-[12px] block rounded-full bg-amber-700 mr-2"></span>
							Корпоративни облигации
						</div>
						<div className="flex items-center">
							<div className="flex items-center">
								16 785 895&nbsp;<span className="text-slate-300"> лв.</span>
							</div>
							<div className="flex items-center pl-8">
								26.60&nbsp;<span className="text-slate-300">%</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<span className="w-[12px] h-[12px] block rounded-full bg-emerald-400 mr-2"></span>
							Акции
						</div>
						<div className="flex items-center">
							<div className="flex items-center">
								33 748 813&nbsp;<span className="text-slate-300"> лв.</span>
							</div>
							<div className="flex items-center pl-8">
								53.48&nbsp;<span className="text-slate-300">%</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<span className="w-[12px] h-[12px] block rounded-full bg-blue-400 mr-2"></span>
							Дялове на К.О.И
						</div>
						<div className="flex items-center">
							<div className="flex items-center">
								6 085 723&nbsp;<span className="text-slate-300"> лв.</span>
							</div>
							<div className="flex items-center pl-8">
								9.64&nbsp;<span className="text-slate-300">%</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<span className="w-[12px] h-[12px] block rounded-full bg-purple-700 mr-2"></span>
							Вземания
						</div>
						<div className="flex items-center">
							<div className="flex items-center">
								74 256&nbsp;<span className="text-slate-300"> лв.</span>
							</div>
							<div className="flex items-center pl-8">
								0.11&nbsp;<span className="text-slate-300">%</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<span className="w-[12px] h-[12px] block rounded-full bg-green-600 mr-2"></span>
							Други активи
						</div>
						<div className="flex items-center">
							<div className="flex items-center">
								4 302 981&nbsp;<span className="text-slate-300"> лв.</span>
							</div>
							<div className="flex items-center pl-8">
								6.81&nbsp;<span className="text-slate-300">%</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between border-t-2 pt-2">
						<div className="flex items-center">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Общо
						</div>
						<div className="flex items-center">
							<div className="flex items-center">
								<strong>
									63 105 421&nbsp;<span className="text-slate-300"> лв.</span>
								</strong>
							</div>
							<div className="flex items-center pl-8">
								<strong>
									100.00&nbsp;<span className="text-slate-300">%</span>
								</strong>
							</div>
						</div>
					</div>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
};
