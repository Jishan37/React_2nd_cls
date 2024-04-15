


const PropsComp = ({contact}) => {
    //const {name , age}= contact;
    //console.log(contact);
    return (
        <div>
           <p><span className="fornt-bold">Name : </span>{contact?.name}</p>
           <p>age : {contact?.age}</p>
        </div>
    );
};

export default PropsComp;