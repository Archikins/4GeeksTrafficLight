import React, { useEffect, useState } from "react";



//create your first component
const LightBulb = (props) => {
	
	return (
		<div className={`circulo ${props.active ? "clicked" : ""} ${props.className} `} onClick={props.onToggle} style={{ backgroundColor: props.backgroundColor }}>

		</div>
	);
};

export default LightBulb;