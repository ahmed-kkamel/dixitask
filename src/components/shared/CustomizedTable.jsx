import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import Popper from "./Popper";
import Loader from "./Loader";
export default function CustomizedTable() {
	// Handling editting table
	const [open, setOpen] = useState(false);
	const [userId, setUserId] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// Fetching data
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const storedUsers = JSON.parse(localStorage.getItem("users"));
		if (storedUsers) {
			setUsers(storedUsers);
		} else {
			dataFetching();
		}
	}, []);
	const dataFetching = async () => {
		try {
			// Handling loading state
			setIsLoading(true);
			const res = await fetch("https://randomuser.me/api/?results=5");
			const data = await res.json();
			localStorage.clear();
			setUsers((prevUsers) => [...prevUsers, ...data.results]);

			localStorage.setItem("users", JSON.stringify([...data.results]));
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	const updateTable = ({
		firstName,
		lastName,
		email,
		country,
		city,
		postcode,
	}) => {
		if (userId !== null) {
			setUsers((prevUsers) =>
				prevUsers.map((user) =>
					user.id.value === userId
						? {
								...user,
								name: {
									first: firstName !== "" ? firstName : user.name.first,
									last: lastName !== "" ? lastName : user.name.last,
								},
								email: email !== "" ? email : user.email,
								location: {
									postcode: postcode !== "" ? postcode : user.location.postcode,
									country: country !== "" ? country : user.location.country,
									city: city !== "" ? city : user.location.city,
								},
						  }
						: user
				)
			);
		}
	};
	const handleClickOpen = (id) => {
		setUserId(id);
		setOpen(true);
		// console.log(userId);
	};
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div
					style={{
						margin: "30px auto",
						maxWidth: "1500px",
						textAlign: "center",
					}}
				>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow style={{ backgroundColor: "#f0f0f0" }}>
									<TableCell
										style={{
											fontWeight: "bold",
											fontSize: "16px",
											color: "#888",
										}}
									>
										NAME
									</TableCell>
									<TableCell
										align="right"
										style={{
											fontWeight: "bold",
											fontSize: "16px",
											color: "#888",
										}}
									>
										LOCATION
									</TableCell>
									<TableCell
										align="right"
										style={{
											fontWeight: "bold",
											fontSize: "16px",
											color: "#888",
										}}
									>
										STATUS
									</TableCell>
									<TableCell
										align="right"
										style={{
											fontWeight: "bold",
											fontSize: "16px",
											color: "#888",
										}}
									>
										POST CODE
									</TableCell>
									<TableCell
										align="right"
										style={{
											fontWeight: "bold",
											fontSize: "16px",
											color: "#888",
										}}
									></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users.map((user, index) => (
									<TableRow
										key={index}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<TableCell component="th" scope="row">
											<Stack flexDirection="row" gap="20px">
												<Avatar src={user.picture.medium} alt="user" />
												<Stack gap="10px">
													<Typography style={{ fontWeight: "bold" }}>
														{user.name.first + " " + user.name.last}
													</Typography>
													<Typography style={{ color: "#888" }}>
														{user.email}
													</Typography>
												</Stack>
											</Stack>
										</TableCell>
										<TableCell align="right">
											<Stack flexDirection="column">
												<Typography style={{ fontWeight: "bold" }}>
													{user.location.country}
												</Typography>
												<Typography style={{ color: "#888" }}>
													{user.location.city}
												</Typography>
											</Stack>
										</TableCell>
										<TableCell
											align="right"
											style={{
												color: "#888",
												fontWeight: "500",
												fontSize: "14px",
											}}
										>
											ِ
											<span
												style={{
													border: "1px solid #17B169",
													padding: "2px",
													backgroundColor: "#4FFFB0",
													borderRadius: "30px",
												}}
											>
												Active
											</span>
										</TableCell>
										<TableCell align="right" style={{ color: "#888" }}>
											{user.location.postcode}
										</TableCell>
										<TableCell align="right">
											<Button onClick={() => handleClickOpen(user.id.value)}>
												Edit
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<Button
						variant="contained"
						onClick={dataFetching}
						style={{ marginTop: "20px" }}
					>
						Fetch more data
					</Button>
					<Popper open={open} setOpen={setOpen} updateTable={updateTable} />
				</div>
			)}
		</>
	);
}
