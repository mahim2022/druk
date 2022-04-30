import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { fetchPost } from "../Api";
import {
	unstable_HistoryRouter,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { Cart } from "../Cart/Cart";

const ResponsiveAppBar = () => {
	const Profile = localStorage.getItem("Profile");
	const pages = [Profile ? "SignOut" : "SignIn", "Orders", "Profile"];

	const navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (page) => {
		setAnchorElNav(null);
		if (page === "SignIn") {
			navigate("customersignin");
		}
		if (page === "SignOut") {
			localStorage.clear(Profile);
		}

		const user = JSON.parse(localStorage.getItem("Profile"));

		if (page === "Orders" && !user) {
			navigate("customersignin");
		}
		if (page === "Orders" && user) {
			console.log("orders");
		}
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		navigate("/customer");
	};

	////doesnot render appbar on certain pages///
	const { pathname } = useLocation();
	if (pathname === "/" || pathname === "/ownerlogin") {
		return <></>;
	}
	//////////
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						LOGO
					</Typography>

					{pathname === "/delivery" ? (
						<></>
					) : (
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					)}
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						onClick={(e) => onSubmit(e)}
					>
						DRUK
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => {
							return (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									<Typography>{page}</Typography>
								</Button>
							);
						})}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						{pathname === "/checkoutPage" ? <></> : <Cart></Cart>}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
