import "./App.css"

import { SignUp } from "./components/SignUp"
import { Success } from "./components/Success"

function App() {
	const signed = true

	return (
		<div className="app">
			{!signed ? <SignUp></SignUp> : <Success></Success>}
		</div>
	)
}

export default App
