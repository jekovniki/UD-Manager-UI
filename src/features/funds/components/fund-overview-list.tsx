import {
    Accordion
} from "@/components/ui/accordion";
import { FundOverviewAccordion } from "./fund-overview-item";

export interface FundOverviewItem {
    id: number,
    title: string,
    description: string,
    performance: number
}

export const FundOverviewList = ({ list }: { list: FundOverviewItem[] }) => {
    return (
        <Accordion type="multiple" className="w-full">
            {list.map(fund => <FundOverviewAccordion key={fund.id} item={fund} />)}
        </Accordion>
    )
}