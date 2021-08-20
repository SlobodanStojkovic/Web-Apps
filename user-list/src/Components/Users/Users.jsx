import "./Users.css";
import { UsersListView } from "../UsersListView/UsersListView";
import { UsersGridView } from "../UsersGridView/UsersGridView";
import { users } from "../../Data/RandomUserList";


export const Users = ({ isListView }) => {
    return (
        isListView ? <UsersListView users={users} /> : <UsersGridView users={users} />
    )
}
