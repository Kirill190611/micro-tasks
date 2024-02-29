import React from 'react';

type ButtonProps = {
    btnTitle: string
    callBack: () => void
}
export const Button = ({btnTitle, callBack}: ButtonProps) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{btnTitle}</button>
    );
};