import React, {useState} from 'react';

export const State = () => {

    // let a = 1;

    let [a, setA] = useState(1)

    const onClickHandlerIncrease = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandlerIncreaseDecrease = () => {
        setA(--a)
    }

    const onClickHandlerIncreaseReset = () => {
        setA(a = 0)
    }

    return (
        <div>
            <div>{a}</div>
            <button onClick={onClickHandlerIncrease}>Increase</button>
            <button onClick={onClickHandlerIncreaseDecrease}>Decrease</button>
            <button onClick={onClickHandlerIncreaseReset}>Reset</button>
        </div>
    );
};
