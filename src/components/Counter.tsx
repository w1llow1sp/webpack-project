import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    function increment () {
        setCount(count+1)
    }
    function decrement () {
        setCount(count-1)
    }

    return (
        <div className={classes.container}>
            <button onClick={increment}>Increment</button>
            {count}
            <button onClick={decrement}>Increment</button>
        </div>
    );
};