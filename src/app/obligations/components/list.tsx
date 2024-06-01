import { ObligationItem, ObligationListItem } from "./item"
import { ObligationSeverity } from "@/enums/obligations"
import { addDays, isToday, isTomorrow, isWithinInterval, intlFormat } from 'date-fns';
import _, { findIndex, groupBy } from 'lodash';

export const ObligationsList = ({ list = [] }: { list: ObligationListItem[] }) => {
    const filteredList = [...list];
    const critical = list.filter(item => isToday(item.date));
    const danger = list.filter(item => isTomorrow(item.date));
    const warning = list.filter(item => {
        const today = new Date();
        const twoDaysFromToday = addDays(today, 2);
        
        return isWithinInterval(new Date(item.date), { start: today, end: twoDaysFromToday });
    });

    critical.forEach(item => {
        const index = findIndex(filteredList, (listItem) => listItem.id === item.id);
        if (index !== -1) {
          filteredList.splice(index, 1);
        }
      });
    
      danger.forEach(item => {
        const index = findIndex(filteredList, (listItem) => listItem.id === item.id);
        if (index !== -1) {
          filteredList.splice(index, 1);
        }
      });
    
      warning.forEach(item => {
        const index = findIndex(filteredList, (listItem) => listItem.id === item.id);
        if (index !== -1) {
          filteredList.splice(index, 1);
        }
      });
      const info = groupBy(filteredList.filter(item => item.date), (item) => item.id);
    return (
        <>
            { critical.length ?
                <>
                    <h5 className="label-color text-sm mt-4 mb-2 font-light mb-none">Днес</h5>
                    <ul>
                        { critical.map(item => <ObligationItem key={item.id} item={item} severity={ObligationSeverity.Critical} />) }
                    </ul>
                </> : ""
            }
            { danger.length ?
                <>
                    <h5 className="label-color text-sm mt-4 mb-2 font-light">Утре</h5>
                    <ul>
                        { danger.map(item => <ObligationItem key={item.id} item={item} severity={ObligationSeverity.Danger} />) }
                    </ul>
                </> : ""
            }
            { warning.length ?
                <>
                    <h5 className="label-color text-sm mt-4 mb-2 font-light">{intlFormat(warning?.[0].date, { year: 'numeric', month: 'long', day: 'numeric' }, 
                    {
                        locale: 'bg-BG'
                    })}</h5>
                    <ul>
                        { warning.map(item => <ObligationItem key={item.id} item={item} severity={ObligationSeverity.Warning} />) }
                    </ul>
                </> : ""
            }
            { info.toString() !== '{}' ? Object.keys(info).map((value: string, index: number) => {
                console.log('value', value);
                console.log('index', index);
                console.log('array : ', info[index]);
                console.log('sub - : ', info[index]?.[0]);
                return (<>
                    <h5 className="label-color text-sm mt-4 mb-2 font-light">{intlFormat(info[index]?.[0].date, { year: 'numeric', month: 'long', day: 'numeric' }, 
                    {
                        locale: 'bg-BG'
                    })}</h5>
                    <ul>
                        { info[index].map((item) => <ObligationItem key={item.id} item={item} severity={ObligationSeverity.Info} />) }
                    </ul>
                </>)
            }) : ""

                
            }

        </>
    );
}