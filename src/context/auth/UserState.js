import UserContext from "./UserContext";

const UserState = (props)=>{

    const state={
        "name":"suraj",
        "class":"5b"
    }
    
    return (
        <UserContext.provider value={state}>
            {props.children}
        </UserContext.provider>
    )

}

export default UserState;
