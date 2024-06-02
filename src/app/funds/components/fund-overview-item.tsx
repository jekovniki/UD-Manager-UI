import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FundOverviewItem } from "./fund-overview-list"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"

export const FundOverviewAccordion = ({ item, ...props }: { item: FundOverviewItem }) => {
    function getBadgeColor(number: number): 'default' | 'destructive' | 'success' {
        if (number < 0) {
            return 'destructive';
        }
        if (number > 0) {
            return 'success';
        }

        return 'default';
    }
    return (
        <AccordionItem value={item.title} {...props}>
            <AccordionTrigger className="fund-accordion-trigger hover:no-underline">
                <div className="flex fund-left">
                    <div className="main-bg h-[40px] w-[40px] flex items-center justify-around rounded icon-box">
                        <i className="ud-wallet text-xl label-color"></i>
                    </div>
                    <div className="ml-4 text-left">
                        <h3 className="text-base font-normal">{item.title} <Badge variant={getBadgeColor(item.performance)}>
                            { item.performance > 0 ? "+" : ""}
                            { item.performance } %
                            </Badge>
                        </h3>
                        <h5 className="text-sm label-color font-light">{item.description}</h5>
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
                            <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                            >
                                <MoreHorizontal className="h-4 w-4" />
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
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
    )
}