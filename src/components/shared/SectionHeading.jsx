import React from "react";
import { Typography } from "@mui/material";

const SectionHeading = ({ sectionNum }) => {
	return (
		<Typography
			marginTop={10}
			variant="h4"
			align="center"
			style={{
				letterSpacing: "2px",
				WebkitTextStroke: "0.3vw #383d52",
				textTransform: "uppercase",
			}}
		>
			Task {sectionNum}
		</Typography>
	);
};

export default SectionHeading;
