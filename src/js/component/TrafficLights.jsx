import React, { useEffect, useState } from "react";

//include images into your bundle
import LightBulb from "./LightBulb.jsx";

//create your first component
const TrafficLights = () => {

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("4");
        }
        setClicked(index);
    };

    const [hideBulb, setHideBulb] = useState(true);    

    const partyTime = (i) => {
        const t = i

        setInterval(() => {
            i--
            if (i < 0) {
                i = t
            }
            handleToggle(i);
            console.log(i)
        }, 1000);
    }
    
    return (
        <div>
            <div className="rectangulo mx-auto mt-4 p-3">
                <LightBulb onToggle={() => handleToggle(0)} active={clicked === 0} backgroundColor="red" />
                <LightBulb onToggle={() => handleToggle(1)} active={clicked === 1} backgroundColor="yellow" />
                <LightBulb onToggle={() => handleToggle(2)} active={clicked === 2} backgroundColor="green" />
                <LightBulb className={`${hideBulb ? "hide-bulb" : "show-bulb"}`} onToggle={() => handleToggle(3)} active={clicked === 3} backgroundColor="purple" />

            </div>
            <button className="btn btn-primary" onClick={() => setHideBulb(!hideBulb)}> Show/hide new color</button>
            <button className="btn btn-primary" onClick={() => partyTime((!hideBulb ? 3 : 2))}> Party</button>
        </div>

    );
};

export default TrafficLights;