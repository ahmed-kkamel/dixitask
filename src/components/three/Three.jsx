/* eslint-disable */
import { useCallback, useState } from "react";
// import { BackToHome } from "../../App";
import ActionBar from "./ActionBar";
import Messges from "./Messages";
import { Typography, Stack } from "@mui/material";
const ChallengeThree = () => {
	const [state, setState] = useState(0);

	// YOU are not allowed to place this in the render function directly
	// as a jsx
	const [componentMap] = useState({
		0: <Messges count={state} />,
		1: (
			<>
				<Messges count={state} />
				<br></br>
				<span>{state + 1}</span>
				<Messges count={state + 1} />
			</>
		),
		2: (
			<>
				<Messges count={state} />
				<br></br>
				<span>{state + 1}</span>
				<Messges count={state + 1} />
				<br></br>
				<span>{state + 2}</span>
				<Messges count={state + 2} />
			</>
		),
		3: (
			<>
				<Messges count={state} />
				<br></br>
				<span>{state + 1}</span>
				<Messges count={state + 1} />
				<br></br>
				<span>{state + 2}</span>
				<Messges count={state + 2} />
				<br></br>
				<Messges count={state + 3} />
			</>
		),
	});
	const handleNextClick = useCallback(() => {
		if (state < 3) setState((prevState) => prevState + 1);
		console.log(state);
	}, [state]);

	const handlePreviousClick = useCallback(() => {
		if (state > 0) setState((prevState) => prevState - 1);
		console.log(state);
	}, [state]);

	return (
		<Stack
			spacing={2}
			direction="row"
			alignItems="center"
			justifyContent="center"
			gap={2}
			marginTop={5}
			marginBottom={5}
		>
			<Typography
				style={{
					display: "inline-block",
					border: "1px solid #ccc",
					padding: "10px",
					backgroundColor: "#f0f0f0",
					borderRadius: "5px",
				}}
			>
				{componentMap[state]}
			</Typography>
			<ActionBar
				onNextClick={handleNextClick}
				onPreviousClick={handlePreviousClick}
			/>
			<br />
		</Stack>
	);
};

export default ChallengeThree;
