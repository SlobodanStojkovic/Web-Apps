import "./UserList.css";
import { Users } from "../Users/Users";
import { RandomUserList } from "../../Data/RandomUserList";


export const UserList = () => {

    return (
        RandomUserList.slice(0, 10).map((User, index) => {

            return (

                < Users User={User} key={index} />
            )
        })
    )
}
