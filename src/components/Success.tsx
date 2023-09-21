import "./Success.css"

export const Success = ({
	email,
	handleDismiss,
}: {
	email: string
	handleDismiss: () => void
}) => {
	return (
		<div className="success">
			<div className="success__contents">
				<img
					src="./images/icon-success.svg"
					alt=""
					className="success__icon"
				/>

				<h2 className="success__heading">Thanks for subscribing!</h2>

				<p className="success__details">
					A confirmation email has been sent to{" "}
					<a href={`mailto:${email}`} className="success__email-link">
						{email}
					</a>
					. Please open it and click the button inside to confirm your
					subscription.
				</p>
			</div>

			<button className="button" onClick={handleDismiss}>
				Dismiss message
			</button>
		</div>
	)
}
