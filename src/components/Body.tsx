import React from 'react';

type BodyProps = {
    title: string
}
export const Body = ({title}: BodyProps) => {
    return (
        <body>
            <h2>{title}</h2>
            Body
        </body>
    );
};
