//"use client";

//import { useEffect } from 'react';

function FloatingBoard({ children }) {
    return (
        <div class="border-lighting">
            <div class="magic-card">
                {children}
            </div>
        </div>
    )
}

function Lighting() {
    return (
        <div class="lighting"></div>
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

function Neumorphic({ children }) {
    return (
        <div class="neumorphic">
            {children}
        </div>
    )
}



export default function Dashboard({ children }) {
    return (
        <section>
            <MagicCard>
                <Neumorphic>Hello</Neumorphic>
            </MagicCard>
            {children}
        </section>
    )
}