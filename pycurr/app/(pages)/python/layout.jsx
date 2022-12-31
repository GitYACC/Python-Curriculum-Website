"use client";

import { useEffect, useState } from 'react';


function MagicCard({ children }) {
    return (
        <div className="magic-card">
            {children}
        </div>
    )
}

function Neumorphic({
    children,
    name,
    width = 100,
    height = 100,
    border_radius = 15,
    top = 50,
    left = 50
}) {
    useEffect(() => {
        let nmorph = document.getElementsByName(name);
        nmorph[0].style.width = `${width}px`;
        nmorph[0].style.height = `${height}px`;
        nmorph[0].style.borderRadius = `${border_radius}px`;
        nmorph[0].style.top = `${top}%`;
        nmorph[0].style.left = `${left}%`;
    }, [])

    return (
        <button onClick={() => alert(`${name}`)} className="neumorphic" name={name}>
            {children}
        </button>
    )
}


export default function Dashboard({ children }) {
    return (
        <section>
            {/* <MagicCard> */}
                {/* <Neumorphic name="fbtn" width={300} left={50}>Hello</Neumorphic> */}
                {/* <Neumorphic name="fbtn2" width={100} left={10}>World!</Neumorphic> */}
            {/* </MagicCard> */}
            <div className="BaseGrid">
                <div className="SideNav"></div>
                <div className="Main"></div>
                <div className="IdeaBoard"></div>
            </div>
            {children}
        </section>
    )
}