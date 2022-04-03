import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, TextField } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function FormModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Container maxWidth="sm">
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				style={{ width: "100px" }}
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography sx={{ p: 2 }}>Enter New Item</Typography>
					<TextField
						id="outlined-basic"
						label="Item Name"
						variant="outlined"
						style={{ width: "90%" }}
					/>
					<TextField
						id="outlined-basic"
						label="Volume"
						variant="outlined"
						style={{ width: "90%" }}
					/>
					<TextField
						id="outlined-basic"
						label="Price"
						variant="outlined"
						style={{ width: "90%" }}
					/>
				</Box>
			</Modal>
		</Container>
	);
}
