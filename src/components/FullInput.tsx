import React, {ChangeEvent, useState} from 'react';

type InputProps = {
    addMessage: (title: string) => void
}
export const FullInput = ({addMessage}: InputProps) => {

    let [title, setTitle] = useState("")
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle("");
    }

    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
        </div>
    );
};