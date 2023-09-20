import { useState } from "react"

import "./App.css"

import { SignUp } from "./components/SignUp"
import { Success } from "./components/Success"

function App() {
	const [signed, setSigned] = useState(false)

	const handleSubmit = () => setSigned(true)
	const handleDismiss = () => setSigned(false)

	return (
		<div className="app">
			{!signed ? (
				<SignUp {...{ handleSubmit }}></SignUp>
			) : (
				<Success {...{ handleDismiss }}></Success>
			)}
		</div>
	)
}

export default App
