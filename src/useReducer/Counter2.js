import { useReducer } from "react";

const initialState = {
    count:0
};

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
          return { count: this.count + 1};
        case 'decrement':
          return { count: this.count - 1};
        default:
            return state;
    }

}

//Using use useReducer Hook


function Counter(props) {
    const [state, dispatch] = useReducer(initialState, reducer);
    
    const incrementCount = () => dispatch({type:'increment'});
    const decrementCount = () => dispatch({type: 'decrement'});


    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default Counter;