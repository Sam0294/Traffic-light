import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("");

	return (
		<div className="rounded-0 container p-10 box">
			<div
				className={`rounded-circle bg-danger red ${
					selected == "red" ? " glow" : ""
				} `}
				onClick={() => {
					setSelected("red");
				}}></div>
			<div
				className={`rounded-circle bg-warning yellow ${
					selected == "yellow" ? " glow" : ""
				} `}
				onClick={() => {
					setSelected("yellow");
				}}></div>
			<div
				className={`rounded-circle bg-success green ${
					selected == "green" ? " glow" : ""
				} `}
				onClick={() => {
					setSelected("green");
				}}></div>
		</div>
	);
};

export default Home;
