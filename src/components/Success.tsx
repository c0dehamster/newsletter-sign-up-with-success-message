import "./Success.css"

export const Success = ({ handleDismiss }: { handleDismiss: () => void }) => {
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
					<a
						href="mailto:ash@loremcompany.com"
						className="success__email-link">
						ash@loremcompany.com
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
