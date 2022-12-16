function FloatingBoard({ children }) {
    return (
        <div class="border-lighting">
            <div class="magic-card">
                {children}
            </div>
        </div>
    )
}

function Lighting({ children }) {
    return (
        <div class="lighting"></div>
    )
}

export default function Dashboard({ children }) {
    return (
        <section>
            <Lighting />
            <FloatingBoard />
            {children}
        </section>
    )
}