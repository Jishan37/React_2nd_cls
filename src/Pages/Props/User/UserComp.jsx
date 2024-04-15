

const UserComp = ({contact}) => {
    const {name, age}= contact;
    return (
        <div className="bg-gray-200 m-10">
            <p>{name}</p>
            <p>{age}</p>
            
        </div>
    );
};

export default UserComp;