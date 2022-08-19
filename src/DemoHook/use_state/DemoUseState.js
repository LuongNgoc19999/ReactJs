import { useState } from "react";

const orders = [100, 200, 300]

function DemoUseState(){
    const [counter, setCounter] = useState(() =>{
        const total = orders.reduce((total, cur) => total+cur);//tinh tong from array
        return total
    })
    const handleIncrease = () => {
        setCounter(prevState => prevState+1)
        // setCounter(counter+1)
    }
    return (
        <div className="DemoUseState" style={{ padding:20}}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}
export default DemoUseState;