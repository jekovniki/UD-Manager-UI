import "../../../assets/obligations-calendar.css";
import Calendar from "react-calendar";

const Obligations = () => {

    return (
        <>
            <Calendar 
                className="obligations-calendar pb-4"
                defaultView="month"
            />
            <hr />
        </>
    )
}

export default Obligations;