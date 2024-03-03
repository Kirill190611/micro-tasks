import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {Banknot} from "./components/Banknot";
import {State} from "./components/State";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {

    const students = [
        {
            id: 1,
            name: "James",
            age: 8,
        },
        {
            id: 2,
            name: "Robert",
            age: 18,
        },
        {
            id: 3,
            name: "John",
            age: 28,
        },
        {
            id: 4,
            name: "Michael",
            age: 38,
        },
        {
            id: 5,
            name: "Will",
            age: 48,
        },
        {
            id: 6,
            name: "David",
            age: 58,
        },
        {
            id: 7,
            name: "Richard",
            age: 68,
        },
        {
            id: 8,
            name: "Joseph",
            age: 78,
        },
        {
            id: 9,
            name: "Thomas",
            age: 88,
        },
        {
            id: 10,
            name: "Charles",
            age: 98,
        },
        {
            id: 11,
            name: "Christopher",
            age: 108,
        },
    ];

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    let [message, setMessage] = useState([
        {message: "message1",},
        {message: "message2",},
        {message: "message3",},
    ])

    let [title, setTitle] = useState("");

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message]);
    }

    const callBackBtnHandler = () => {
        addMessage(title);
        setTitle("");
    }

    return (
        <div className="App">
            {/*<Header title="New Header"/>
            <Body title="New Body" students={students} cars={topCars}/>
            <Footer title="New Footer"/>
            <State />
            <Banknot />*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button btnTitle="+" callBack={callBackBtnHandler}/>
            {
                message.map((element, index) => {
                    return (
                        <div key={index}>{element.message}</div>
                    );
                })
            }
        </div>
    );
}

export default App;