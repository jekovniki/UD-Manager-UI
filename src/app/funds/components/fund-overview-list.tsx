import {
    Accordion
} from "@/components/ui/accordion";
import { FundOverviewAccordion } from "./fund-overview-item";

export interface FundOverviewItem {
    id: number,
    title: string,
    description: string,
    performance: string
}

export const FundOverviewList = ({ list }: { list: FundOverviewItem[] }) => {
    return (
        <Accordion type="multiple" className="w-full">
            {list.map(fund => <FundOverviewAccordion item={fund} />)}
        </Accordion>
    )
}