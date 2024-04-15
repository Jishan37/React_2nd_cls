import { useState } from "react";


const CounterApp = () => {

    const [count, setCount] = useState(0);
    console.log(count);

    const increment = () => {
        setCount(preventCount => preventCount + 1);
    }

    const decrement = () => {
        setCount(preventCount => preventCount - 1);
    }
    return (
        <div className="gap-4 shadow-2xl flex bg-emerald-200 m-10 p-10 justify-center items-center mt-24">
            <button className="btn btn-outline" onClick={decrement}>Decrement</button>
            <p>Total:{count}</p>
            <button className="btn btn-outline" onClick={increment}>increment</button>
        </div>
    );
};

export default CounterApp;