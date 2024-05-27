import { Button } from "@/components/ui/button";
import "../../../assets/obligations-calendar.css";
import Calendar from "react-calendar";

const Obligations = () => {

    return (
        <>
            <Calendar 
                className="obligations-calendar pb-2"
                defaultView="month"
                next2Label={null}
                prev2Label={null}
            />
            <div className="px-2 my-4">
                <Button type="button" className="w-full h-[50px] add-button" variant="secondary"><i className="ud-plus"></i> Добави Напомняне</Button>
            </div>

        </>
    )
}

export default Obligations;