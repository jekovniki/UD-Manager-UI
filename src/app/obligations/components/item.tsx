import { ObligationSeverity } from "@/enums/obligations"
import { intlFormat, format } from "date-fns"
import { truncateText } from "@/utils/helpers"

export type ObligationListItem = {
    id: number,
    name: string,
    date: string,
    createdBy: string
}

export const ObligationItem = ({ item, severity }: { item: ObligationListItem, severity: ObligationSeverity }) => {
    const date = new Date(item.date);
    return (
        <li className="mb-4 flex gap-2 items-center">
            <div className={severity + ' rounded h-[45px] w-[50px] text-primary-foreground flex flex-col items-center'}>
                <span className="font-medium text-lg mt-[1px]">{format(date, 'dd')}</span>
                <span className="capitalize text-xs font-light mt-[-5px]">
                    {intlFormat(date, { weekday: 'short' }, 
                    {
                        locale: 'bg-BG'
                    })}
                </span>
            </div>
            <div className="text-sm font-medium w-[212px]">{ truncateText(item.name, 45) }</div>
            <div className="w-[18px] pr-2">
                <i className="ud-trash-can text-red-500 text-base duration-200 cursor-pointer hover:text-gray-900"></i>
            </div>
        </li>
    )
}