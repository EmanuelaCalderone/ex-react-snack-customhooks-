/*snack.3 Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.
Cosa deve fare?
Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
Posiziona il componente al posto del puntatore del mouse.
Il componente segue i movimenti del mouse. */

import { useState } from "react";
import { useEffect } from "react";

export default function useCustomPointer(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouse = e => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener("mousemove", handleMouse);
        return () => document.removeEventListener("mousemove", handleMouse);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
                cursor: "none",
                pointerEvents: "none"

            }}
        >
            {component}
        </div>
    )
}