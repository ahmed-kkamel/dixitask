import React from "react";
import { useState } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";
import SectionHeading from "./shared/SectionHeading";
const TaskOne = () => {
	function isPalindrome(str) {
		let left = 0;
		let right = str.length - 1;
		while (left < right) {
			if (str[left] !== str[right]) {
				return false;
			}
			left++;
			right--;
		}
		return true;
	}

	function palindromeIndex(s) {
		for (let i = 0; i < Math.floor(s.length / 2); i++) {
			if (s[i] !== s[s.length - 1 - i]) {
				const stringWithoutChar = s.substring(0, i) + s.substring(i + 1);

				if (isPalindrome(stringWithoutChar)) {
					return i;
				}

				const oppositeIndex = s.length - 1 - i;
				const stringWithoutOppositeChar =
					s.substring(0, oppositeIndex) + s.substring(oppositeIndex + 1);

				if (isPalindrome(stringWithoutOppositeChar)) {
					return oppositeIndex;
				}
				return -1;
			}
		}
		return -1;
	}

	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = () => {
		let finalResult;
		if (input !== "") finalResult = palindromeIndex(input);
		setOutput(finalResult);
		setInput("");
	};

	return (
		<section>
			<SectionHeading sectionNum={"One"} />
			<Stack
				spacing={2}
				direction="row"
				alignItems="center"
				justifyContent="center"
				gap={2}
				marginTop={5}
			>
				<TextField
					label="Input String"
					variant="outlined"
					value={input}
					onChange={handleChange}
				/>
				<Button variant="contained" onClick={handleSubmit}>
					Submit
				</Button>
				<Typography
					style={{
						display: "inline-block",
						border: "1px solid #ccc",
						padding: "10px",
						backgroundColor: "#f0f0f0",
						borderRadius: "5px",
					}}
				>
					{output !== -1 && output
						? `Palindrome found at index ${output}`
						: output
						? "-1 No palindrome found"
						: "input your text to start testing palindrome"}
				</Typography>
			</Stack>
		</section>
	);
};

export default TaskOne;
