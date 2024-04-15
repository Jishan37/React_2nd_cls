

const RealDataComp = ({user}) => {
    const{name, username,email,address}=user;
    return (
        <div className="m-4 p-4 bg-emerald-400">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{address?.city}</p>
        </div>
    );
};

export default RealDataComp;