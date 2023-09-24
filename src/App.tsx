import { useState } from "react"

import "./App.css"

import { SignUp } from "./components/SignUp"
import { Success } from "./components/Success"

function App() {
	const [signed, setSigned] = useState(false)
	const [email, setEmail] = useState("")

	const onSubmit = (data: { email: string }) => {
		setSigned(true)
		setEmail(data.email)
	}

	const handleDismiss = () => setSigned(false)

	return (
		<main className="app">
			{!signed ? (
				<SignUp {...{ onSubmit }}></SignUp>
			) : (
				<Success {...{ email, handleDismiss }}></Success>
			)}
		</main>
	)
}

export default App
