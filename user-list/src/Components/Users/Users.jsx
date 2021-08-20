import { UserImg } from "../UserImg/UserImg";
import { UserInfo } from "../UserInfo/UserInfo";
import "./Users.css";


export const Users = ({ User, isListView }) => {

    const gridOrLineClass = isListView ? "gridView" : "listView";

    return (
        <div className={`userWrapper ${gridOrLineClass}`}>
            < UserImg picture={User.picture.large} alt="Profile Picture" />
            <UserInfo name={User.name.first} email={User.email} dob={User.dob.date.slice(0, 10).split("-").reverse().join("-")} />
            {/*User.dob.date.slice(0,10).split("-").reverse().join("-") Here we first cut date format to show us only year,month and day, then we split it by -, reverse it, and join all together again with - as it was before to recieve exactly the same Date format as its required for this exercise. */}
        </div >
    )
}