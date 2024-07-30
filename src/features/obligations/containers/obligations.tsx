import "../styles/obligations-calendar.css";
import Calendar from "react-calendar";
import { ObligationsList } from "../components/list";
import { AddObligationModal } from "../components/add-obligation-modal";

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
    }, {
        id: 6,
        name: 'Напомняне, подаване на годишна декларация за финансов отчет',
        date: '2024-06-10 10:10:10.555555-05:00',
        createdBy: 'Иван Овчаров'
    }, {
        id: 7,
        name: '4 Напомняне, подавне на документи за годишен отчет и одобрение',
        date: '2024-06-10 10:10:10.555555-05:00',
        createdBy: 'Ива Миткова'
    }, {
        id: 8,
        name: '5 Подаване на документи за годишен отчет и одобрение',
        date: '2024-06-12 10:10:10.555555-05:00',
        createdBy: 'Николай Жеков'
    }, {
        id: 9,
        name: '5 Подаване на документи за годишен отчет и одобрение',
        date: '2024-06-12 10:10:10.555555-05:00',
        createdBy: 'Николай Жеков'
    }, {
        id: 10,
        name: '5 Подаване на документи за годишен отчет и одобрение',
        date: '2024-06-12 10:10:10.555555-05:00',
        createdBy: 'Николай Жеков'
    }, {
        id: 11,
        name: '5 Подаване на документи за годишен отчет и одобрение',
        date: '2024-06-12 10:10:10.555555-05:00',
        createdBy: 'Николай Жеков'
    }]

    /**
     * @todo: if you ever decide to change the height of the calendar, go to the obligations.scss
     * There is calculation there for the height of the listing.
     * It is the 100vh - height of the top line - height of calendar - height of button
     */
    return (
        <div className="bg-background h-full shadow-md">
            <Calendar 
                className="obligations-calendar pb-2"
                defaultView="month"
                next2Label={null}
                prev2Label={null}
            />
            <AddObligationModal />
            <div className="px-4 obligations-list">
                { obligations.length ?
                    <ObligationsList list={obligations} />
                    : <h5 className="label-color text-sm text-center mt-8 mb-2 font-light mb-none">Няма предстоящи задължения</h5>
                }
            </div>
        </div>
    )
}

export default Obligations;