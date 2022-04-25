import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { TextField } from "@mui/material";

export default function AddressPopOver() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<Button aria-describedby={id} variant="text" onClick={handleClick}>
				E
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<div style={{ padding: "8px", width: "350px" }}>
					<TextField
						id="outlined-basic"
						label="Enter Address"
						variant="outlined"
						style={{ width: "100%" }}
					/>
					<div
						style={{
							paddingTop: "10px",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-evenly",
						}}
					>
						{" "}
						<Button variant="contained">Submit</Button>
						<Typography>OR</Typography>
						<Button variant="contained">Locate</Button>
					</div>
				</div>
			</Popover>
		</div>
	);
}
