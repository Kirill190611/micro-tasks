import React from 'react';

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
        </div>
    );
};
