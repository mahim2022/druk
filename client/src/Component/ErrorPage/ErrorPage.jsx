import { Container } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/");
	};
	return (
		<div style={{ width: "100vw" }}>
			<section className="page_404">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 ">
							<div className="col-sm-10 col-sm-offset-1  text-center">
								<div className="four_zero_four_bg">
									<h1 className="text-center ">404</h1>
								</div>

								<div className="contant_box_404">
									<h3 className="h2">Look like you're lost</h3>

									<p>the page you are looking for not avaible!</p>

									<a
										href=""
										className="link_404"
										onClick={(event) => {
											handleSubmit(event);
										}}
									>
										Go to Home
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default ErrorPage;
