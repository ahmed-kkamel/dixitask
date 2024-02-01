import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
export default function Popper({ open, setOpen, updateTable }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [postcode, setPostcode] = useState("");
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");

	const handleClose = () => {
		setOpen(false);
	};
	const handleFirstName = (e) => {
		setFirstName(e.target.value);
	};
	const handleLastName = (e) => {
		setLastName(e.target.value);
	};
	const handleEmailAddress = (e) => {
		setEmail(e.target.value);
	};
	const handleCountry = (e) => {
		setCountry(e.target.value);
	};
	const handleCity = (e) => {
		setCity(e.target.value);
	};
	const handlePostCode = (e) => {
		setPostcode(e.target.value);
	};
	const handleUpdate = () => {
		// console.log("values:", {
		// 	firstName,
		// 	lastName,
		// 	email,
		// 	postcode,
		// 	country,
		// 	city,
		// });
		updateTable({
			firstName: firstName,
			lastName: lastName,
			email: email,
			postcode: postcode,
			country: country,
			city: city,
		});
		setFirstName("");
		setLastName("");
		setEmail("");
		setPostcode("");
		setCountry("");
		setCity("");
	};

	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						handleClose();
					},
				}}
			>
				<DialogTitle>Edit table data</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You can easily updata the Fetched data from here
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						label="First Name"
						type="text"
						value={firstName}
						onChange={handleFirstName}
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						label="Last Name"
						type="text"
						value={lastName}
						onChange={handleLastName}
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						margin="dense"
						label="Email Address"
						type="email"
						value={email}
						onChange={handleEmailAddress}
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						margin="dense"
						label="Country"
						type="text"
						value={country}
						onChange={handleCountry}
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						margin="dense"
						label="City"
						type="text"
						value={city}
						onChange={handleCity}
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						margin="dense"
						label="Post Code"
						type="text"
						value={postcode}
						onChange={handlePostCode}
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit" onClick={handleUpdate}>
						Update
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
