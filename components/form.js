import UpdateUserForm from "./updateUserForm";
import AddUser from "./adduser";

export default function Form(){

    const flag = true;

    return (
        <div className="container mx-auto py-5">
            { flag ? <AddUser /> : <UpdateUserForm /> }
        </div>
    )
}