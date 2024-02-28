import React from 'react';

type HeaderProps = {
    title: string
}
export const Header = ({title}: HeaderProps) => {
    return (
        <header>
            <h2>{title}</h2>
            Header
        </header>
    );
};
