"use client";

import { useEffect, useState } from 'react';

function FloatingBoard({ children }) {
    return (
        <div className="border-lighting">
            <div className="magic-card">
                {children}
            </div>
        </div>
    )
}

function Lighting() {
    return (
        <div className="lighting"></div>
    )
}

function MagicCard({ children }) {
    return (
        <div>
            <Lighting />
            <FloatingBoard>
                {children}
            </FloatingBoard>
        </div>
    )
}

function Neumorphic({
    children,
    name,
    width = 100,
    height = 100,
    border_radius = 15
}) {
    let nmorph = document.getElementsByName(name);

    useEffect(() => {
        nmorph[0].style.width = `${width}px`;
        nmorph[0].style.height = `${height}px`;
        nmorph[0].style.borderRadius = `${border_radius}px`;
    }, [])

    return (
        <div className="neumorphic" name={name}>
            {children}
        </div>
    )
}


export default function Dashboard({ children }) {
    return (
        <section>
            <MagicCard>
                <Neumorphic name="fbtn" width={300}>Hello</Neumorphic>
            </MagicCard>
            {children}
        </section>
    )
}