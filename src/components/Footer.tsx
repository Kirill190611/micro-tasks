import React from 'react';

type FooterProps = {
    title: string
}

export const Footer = ({title}: FooterProps) => {
    return (
        <footer>
            <h2>{title}</h2>
            Footer
        </footer>
    );
};