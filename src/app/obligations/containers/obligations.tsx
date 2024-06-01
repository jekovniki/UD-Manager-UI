import { Button } from "@/components/ui/button";
import "../../../assets/obligations-calendar.css";
import Calendar from "react-calendar";
import { ObligationsList } from "../components/list";

const Obligations = () => {

    const obligations = [{
        id: 1,
        name: 'Подаване на документи за годишен отчет и одобрения',
        date: '2024-06-01 10:10:10.555555-05:00',
        createdBy: 'Иван Иванов'
    }, {
        id: 2,
        name: 'Друго известие което е много важно и с по-дълъг живот',
        date: '2024-06-01 10:10:10.555555-05:00',
        createdBy: 'Ива Миткова'
    }, {
        id: 3,
        name: 'Напомняне, подаване на годишна декларация за финансов отчет',
        date: '2024-06-02 10:10:10.555555-05:00',
        createdBy: 'Иван Овчаров'
    }, {
        id: 4,
        name: '4 Напомняне, подавне на документи за годишен отчет и одобрение',
        date: '2024-06-10 10:10:10.555555-05:00',
        createdBy: 'Ива Миткова'
    }, {
        id: 5,
        name: '5 Подаване на документи за годишен отчет и одобрение',
        date: '2024-06-10 10:10:10.555555-05:00',
        createdBy: 'Николай Жеков'
    }]

    return (
        <div className="bg-background h-full shadow-md">
            <Calendar 
                className="obligations-calendar pb-2"
                defaultView="month"
                next2Label={null}
                prev2Label={null}
            />
            <div className="px-4 my-4">
                <Button type="button" className="w-full h-[50px] add-button" variant="secondary"><i className="ud-plus"></i> Добави Напомняне</Button>
            </div>
            <div className="px-4">
                { obligations.length ?
                    <ObligationsList list={obligations} />
                    : <h5 className="label-color text-sm text-center mt-8 mb-2 font-light mb-none">Няма предстоящи задължения</h5>
                }
            </div>
        </div>
    )
}

export default Obligations;