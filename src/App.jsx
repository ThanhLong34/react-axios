import { useEffect } from "react";
import userApi from "./api/userApi";
import "./App.css";

function App() {
	useEffect(() => {
		const fetchUserList = async () => {
			const userList = await userApi.getList();
			console.log(userList);
		};

		fetchUserList();
	}, []);

	return (
		<div className="App">
			<h1>Open your dev tool in tab console</h1>
		</div>
	);
}

export default App;
