import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import { processedOrder } from "../../Api";

export const OrderButtons = ({ invoiceId }) => {
	const handleClick = async (e, type) => {
		if (type === "sent") {
			await processedOrder(invoiceId, { orderStatus: "sent" });
		}
		if (type === "rejected") {
			await processedOrder(invoiceId, { orderStatus: "rejected" });
		}
	};
	return (
		<>
			<Button
				variant="outlined"
				onClick={(e) => {
					handleClick(e, "sent");
				}}
			>
				<CheckCircleIcon></CheckCircleIcon>
			</Button>
			<Button
				variant="outlined"
				style={{ color: "red", marginTop: "5px" }}
				onClick={(e) => {
					handleClick(e, "rejected");
				}}
			>
				<CancelTwoToneIcon></CancelTwoToneIcon>
			</Button>
		</>
	);
};
