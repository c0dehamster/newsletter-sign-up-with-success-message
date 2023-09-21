import { useState } from "react"

import { SubmitHandler } from "react-hook-form"

import "./App.css"

import { SignUp } from "./components/SignUp"
import { Success } from "./components/Success"

interface FormInput {
	email: string
}

function App() {
	const [signed, setSigned] = useState(false)

	const onSubmit: SubmitHandler<FormInput> = data => {
		setSigned(true)
		console.log(data)
	}

	const handleDismiss = () => setSigned(false)

	return (
		<div className="app">
			{!signed ? (
				<SignUp {...{ onSubmit }}></SignUp>
			) : (
				<Success {...{ handleDismiss }}></Success>
			)}
		</div>
	)
}

export default App
