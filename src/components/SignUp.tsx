import { useForm, SubmitHandler } from "react-hook-form"

import "./SignUp.css"

interface FormInput {
	email: string
}

export const SignUp = ({
	onSubmit,
}: {
	onSubmit: SubmitHandler<FormInput>
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>({
		mode: "onTouched",
	})

	return (
		<div className="sign-up">
			<div className="sign-up__contents">
				<h1 className="sign-up__heading">Stay updated!</h1>

				<p className="sign-up__description">
					Join 60,000+ product managers receiving monthly updates on:
				</p>

				<ul className="sign-up__list" role="list">
					<li className="sign-up__list-item" role="listitem">
						Product discovery and building what matters
					</li>

					<li className="sign-up__list-item" role="listitem">
						Measuring to ensure updates are a success
					</li>

					<li className="sign-up__list-item" role="listitem">
						And much more!
					</li>
				</ul>

				<form
					action=""
					className="form"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="form__input-wrapper">
						<label htmlFor="email" className="form__label">
							Email address
						</label>

						<input
							type="text"
							id="email"
							className="form__input"
							placeholder="email@company.com"
							{...register("email", {
								required: true,
								pattern: {
									value: /^\w+@\w+\.\w+$/,
									message: "Valid email required!",
								},
							})}
							aria-invalid={errors.email ? "true" : "false"}
						/>

						{errors.email && errors.email.type === "required" && (
							<p className="form__error" role="alert">
								Email cannot be empty!
							</p>
						)}

						{errors.email && errors.email.type === "pattern" && (
							<p className="form__error" role="alert">
								Valid email required!
							</p>
						)}
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
