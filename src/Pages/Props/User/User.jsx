import UserComp from "./UserComp";


const User = () => {

    const contacts = [
        {
            name : 'Jishan',
            age: 23,
        },
        {
            name : 'Maya',
            age: 23,
        },
    ]
    return (
        <div className="bg-slate-600 m-5 p-5">
            {
                contacts.map((contact)=>(
                    <UserComp key={contact.name} contact={contact}/>
                ))
            }
        </div>
    );
};

export default User;