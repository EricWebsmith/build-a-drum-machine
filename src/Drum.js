import { useState } from "react";
import Pad from "./Pad";

export default function Drum() {
    const [display, setDisplay] = useState('Display');

    function updateDisplay(key) {
        setDisplay(key);
    }

    const data = [
        {
            key: "Q",
            name: 'Heater-1',
            filename: 'Heater-1'
        },
        {
            key: "W",
            name: 'Heater-2',
            filename: 'Heater-2'
        },
        {
            key: "E",
            name: 'Heater-3',
            filename: 'Heater-3'
        },
        {
            key: "A",
            name: 'Heater-4',
            filename: 'Heater-4_1'
        },
        {
            key: "S",
            name: 'Clap',
            filename: 'Heater-6'
        },
        {
            key: "D",
            name: 'Open-HH',
            filename: 'Dsc_Oh'
        },
        {
            key: "Z",
            name: "Kick-n'-Hat",
            filename: 'Kick_n_Hat'
        },
        {
            key: "X",
            name: 'Kick',
            filename: 'RP4_KICK_1'
        },
        {
            key: "C",
            name: 'Closed-HH',
            filename: 'Cev_H2'
        }
    ]

    
    function handleKeyDown(e) {
        const key = e.key.toUpperCase();
        const config = data.find((c) => c.key === key);
        if (config==null){
            return;
        }

        updateDisplay(config.name);
        const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/drums/${config.filename}.mp3`);
        audio.play();
    }

    return (
        <div id="drum-machine" onKeyDown={handleKeyDown}>
            <div id="display">
                {display}
            </div>
            <div className="pads">
                <Pad name="Heater-1" filename="Heater-1" value="Q" updateDisplay={updateDisplay}></Pad>
                <Pad name="Heater-2" filename="Heater-2" value="W" updateDisplay={updateDisplay}></Pad>
                <Pad name="Heater-3" filename="Heater-3" value="E" updateDisplay={updateDisplay}></Pad>
                <Pad name="Heater-4" filename="Heater-4_1" value="A" updateDisplay={updateDisplay}></Pad>
                <Pad name="Clap" filename="Heater-6" value="S" updateDisplay={updateDisplay}></Pad>
                <Pad name="Open-HH" filename="Dsc_Oh" value="D" updateDisplay={updateDisplay}></Pad>
                <Pad name="Kick-n'-Hat" filename="Kick_n_Hat" value="Z" updateDisplay={updateDisplay}></Pad>
                <Pad name="Kick" filename="RP4_KICK_1" value="X" updateDisplay={updateDisplay}></Pad>
                <Pad name="Closed-HH" filename="Cev_H2" value="C" updateDisplay={updateDisplay}></Pad>
            </div>
        </div>
    )
}