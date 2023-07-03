import { useState } from "react"
import useStore from "../../../store/store";

export default function ModeToggle() {
    const turn = useStore((state) => state.turn);
    const turnOn = useStore((state) => state.turnOn);
    const turnOff = useStore((state) => state.turnOff);

    return (
        <div>
        <button onClick={
            turn?turnOff:turnOn} >{turn?'Light':'Night'}</button>
        </div>
    )
}
