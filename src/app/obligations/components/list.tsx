import { ObligationItem, ObligationListItem } from "./item"
import { ObligationSeverity } from "@/enums/obligations"
import { addDays, isToday, isTomorrow, isWithinInterval, intlFormat } from 'date-fns';
import { groupBy } from 'lodash';

export const ObligationsList = ({ list = [] }: { list: ObligationListItem[] }) => {
    // const filteredList = _.groupBy(list, (obligation) => {
    //     return obligation.date.split('T')[0];
    // });
    const today = new Date();
    const twoDaysFromToday = addDays(today, 2);

    const critical = list.filter(item => isToday(item.date));
    const danger = list.filter(item => isTomorrow(item.date));
    const warning = list.filter(item => isWithinInterval(new Date(item.date), { start: today, end: twoDaysFromToday }));

    const otherDates = list.filter(item => {
        return !isToday(new Date(item.date)) && !isTomorrow(new Date(item.date)) && !isWithinInterval(new Date(item.date), { start: twoDaysFromToday, end: twoDaysFromToday });
    });

    const info = groupBy(otherDates, (obligation) => {
        return obligation.date.split('T')[0];
    });

    return (
        <>
            { critical.length ?
                <>
                    <h5 className="label-color text-sm mt-4 mb-2 font-light mb-none">Днес</h5>
                    <ul key='ul-critical'>
                        { critical.map(item => <ObligationItem key={`critical-${item.id}`} item={item} severity={ObligationSeverity.Critical} />) }
                    </ul>
                </> : ""
            }
            { danger.length ?
                <>
                    <h5 className="label-color text-sm mt-4 mb-2 font-light">Утре</h5>
                    <ul key={'ul-danger'}>
                        { danger.map(item => <ObligationItem key={`danger-${item.id}`} item={item} severity={ObligationSeverity.Danger} />) }
                    </ul>
                </> : ""
            }
            { warning.length ?
                <>
                    <h5 className="label-color text-sm mt-4 mb-2 font-light">{intlFormat(warning?.[0].date, { year: 'numeric', month: 'long', day: 'numeric' }, 
                    {
                        locale: 'bg-BG'
                    })}</h5>
                    <ul key={'ul-warning'}>
                        { warning.map(item => <ObligationItem key={`warning-${item.id}`} item={item} severity={ObligationSeverity.Warning} />) }
                    </ul>
                </> : ""
            }
            { Object.keys(info).length ? Object.values(info).map((value, index) => {
                return (
                    <div key={`info-${index}`}>
                        <h5 className="label-color text-sm mt-4 mb-2 font-light" key={index}>{intlFormat(new Date(value[0].date), { year: 'numeric', month: 'long', day: 'numeric' }, 
                        {
                            locale: 'bg-BG'
                        })}</h5>
                        <ul key={`ul-info-${index}`}>
                            { value.map((item) => <ObligationItem key={`info-${item.id}`} item={item} severity={ObligationSeverity.Info} />) }
                        </ul>
                    </div>
                )
            }) : ""
            }

        </>
    );
}