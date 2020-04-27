import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <ul className={"top-nav"}>
                <li><a href={"#introduction"}>about me</a></li>
                <li><a href={"#skills"}>skills</a></li>
                <li><a href="Introduction.jsx">portfolio</a></li>
            </ul>
        </nav>
    );
}
