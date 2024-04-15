import { useEffect, useState } from "react";


const AutoCount = () => {

    const[count, setCount] = useState(1);

    useEffect(()=>{
        const time =setTimeout(()=>{
    setCount(preventCount => preventCount +1);
    },.000001);
    return()=>{
        time
    }
    },[count])
    return (
        <div>
           <p>{count}</p>
        </div>
    );
};

export default AutoCount;