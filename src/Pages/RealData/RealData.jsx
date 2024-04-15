import { useEffect, useState } from "react";


const RealData = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const fatchData = async() =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setUsers(data);

            }catch(error){
                console.log(error);
            }
        };
        fatchData();
    },[])
    return (
        <div>
            {
                users.map(user => (
                    <RealData key={user.id} user={user}/>
                ))
            }
        </div>
    );
};

export default RealData;