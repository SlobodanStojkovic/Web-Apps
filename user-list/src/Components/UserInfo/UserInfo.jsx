import "./UserInfo.css";

export const UserInfo = ({ name, email, dob }) => {
    return (
        <div class="info">
            <p>
                name: {name}
            </p>
            <p>
                email: {email}
            </p>
            <p>
                date of birth: {dob}
            </p>
        </div>
    )
}