import { Button } from "@mui/material";

const ActionBar = (props) => {
	return (
		<>
			<Button
				variant="contained"
				onClick={props.onPreviousClick}
				style={{ marginRight: "5px" }}
			>
				Previous
			</Button>
			<Button variant="contained" onClick={props.onNextClick}>
				Next
			</Button>
		</>
	);
};

export default ActionBar;
