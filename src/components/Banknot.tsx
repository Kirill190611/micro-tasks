import React, {useState} from 'react';
import {Button} from "./Button";

export const Banknot = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState("all")

    let currentMoney = money;

    if (filter === "RUBLS") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }
    if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }

    const onClickFilterHandler = (nameBtn: string) => {
        setFilter(nameBtn);
    }

    return (
        <>
            <ul>
                {
                    currentMoney.map((objMoney, index) => {
                        return (
                            <li key={index}>
                                <div>{objMoney.banknots}</div>
                                <div>{objMoney.value}</div>
                                <div>{objMoney.number}</div>
                            </li>
                        )
                    })
                }
            </ul>
            <Button btnTitle="all" callBack={() => onClickFilterHandler("all")}/>
            <Button btnTitle="RUBLS" callBack={() => onClickFilterHandler("RUBLS")}/>
            <Button btnTitle="Dollars" callBack={() => onClickFilterHandler("Dollars")}/>
        </>
    );
};
