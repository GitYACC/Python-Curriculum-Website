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

function ClickLink({ href, children }) {
    return (
        <li><a href={href}>{children}</a></li>
    )
}

function GlobalNav({ children }) {
    return (
        <div style={{
            "min-width": "100vw", 
            "backgroundColor": "#0f1729", 
            "borderBottom": "1px solid rgb(255, 255, 255, 0.1)",
            "justifyContent": "center"
        }}>
            <ul className="gnav">
                <ClickLink href="#">Docs</ClickLink>
                <ClickLink>Examples</ClickLink>
                <ClickLink>Frameworks</ClickLink>
            </ul>
        </div>
    )
}


export default function Dashboard({ children }) {
    return (
        <section>
            <GlobalNav />
            {children}
        </section>
    )
}