import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

// const buttons = [
// 	<Button key="one" style={{ width: "100%" }}>
// 		Orders
// 	</Button>,
// 	<Button key="two" style={{ width: "100%" }}>
// 		Inventory
// 	</Button>,
// ];

export default function Tabs({ changeView }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				"& > *": {
					m: 1,
				},
			}}
		>
			<ButtonGroup color="secondary" aria-label="medium secondary button group">
				<Button
					key="one"
					style={{ width: "100%" }}
					onClick={() => changeView(false)}
				>
					Orders
				</Button>
				<Button
					key="two"
					style={{ width: "100%" }}
					onClick={() => changeView(true)}
				>
					Inventory
				</Button>
			</ButtonGroup>
		</Box>
	);
}
