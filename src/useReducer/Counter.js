import { useState } from "react";


//Using use State
function Counter(props) {
    const [count, setCount] = useState(0);
    
    const incrementCount = () => setCount(prevCount => prevCount + 1);
    const decrementCount = () => setCount(prevCount => prevCount - 1);


    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default Counter;