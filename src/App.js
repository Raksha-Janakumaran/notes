// import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MainPage from './Pages/MainPage';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
return (
	<Router>
	<div className="App">
			<Routes>
				<Route path="/" element={<Login/>}/> 
				<Route path ="/register" element={<Register/>}/> 
				<Route path="/app" element={<MainPage/>}/>
			</Routes>
	</div>
	</Router>
);
}

export default App;

