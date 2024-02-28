import React from 'react';
import {Button} from "../Button";

type CarsProps = {
    manufacturer: string
    model: string
}

type StudentsProps = {
    id: number
    name: string
    age: number
}

type BodyProps = {
    title: string
    students: StudentsProps[]
    cars: CarsProps[]
}
export const Body = ({title, students, cars}: BodyProps) => {

    const button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const button3Foo = () => {
        console.log("Im additional btn")
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>Students list</p>
            <ul>
                {
                    students.map((student) => {
                        return (
                            <li key={student.id}>
                                <div>Student name: {student.name}</div>
                                <div>Student age: {student.age}</div>
                            </li>
                        )
                    })
                }
            </ul>
            <p>Top cars list</p>
            <table>
                {
                    cars.map((car, index) => {
                        return (
                            <tr key={index}>
                                <th>{car.manufacturer}</th>
                                <th>{car.model}</th>
                            </tr>
                        )
                    })
                }
            </table>
            <Button btnTitle="MyYTChanel-1" callBack={() => button1Foo("Vasya", 25, "Moscow")}/>
            <Button btnTitle="MyYTChanel-2" callBack={() => button2Foo("Ivan")}/>
            <Button btnTitle="Additional Button" callBack={button3Foo} />
        </div>
    );
};
