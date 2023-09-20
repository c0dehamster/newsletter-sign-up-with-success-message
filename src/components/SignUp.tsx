import "./SignUp.css"

export const SignUp = () => {
	return (
		<div className="sign-up">
			<div className="sign-up__contents">
				<h1 className="sign-up__heading">Stay updated!</h1>

				<p className="sign-up__description">
					Join 60,000+ product managers receiving monthly updates on:
				</p>

				<ul className="sign-up__list">
					<li className="sign-up__list-item">
						Product discovery and building what matters
					</li>

					<li className="sign-up__list-item">
						Measuring to ensure updates are a success
					</li>

					<li className="sign-up__list-item">And much more!</li>
				</ul>

				<form action="" className="form">
					<div className="form__input-wrapper">
						<label htmlFor="" className="form__label">
							Email address
						</label>

						<p className="form__error">Valid email required!</p>

						<input
							type="text"
							className="form__input"
							placeholder="email@company.com"
						/>
					</div>

					<button className="button">
						Subscribe to monthly newsletter
					</button>
				</form>
			</div>

			<picture className="sign-up__illustration">
				<source
					media="(max-width: 59.9rem)"
					srcSet="./images/illustration-sign-up-mobile.svg 375w"
				/>

				<source
					media="(min-width: 60rem)"
					srcSet="./images/illustration-sign-up-desktop.svg 400w"
				/>

				<img
					src="./images/illustration-sign-up-mobile.svg"
					alt=""
					className="sign-up__image"
				/>
			</picture>
		</div>
	)
}
