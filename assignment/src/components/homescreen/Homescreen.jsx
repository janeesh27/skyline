import React from 'react';
import Loginfrom from '../Loginform';
import './homescreen.css';

const Homescreen = () => {
	const [animation, setAnimation] = React.useState(false);

	const getlogin = () => {
		return localStorage.getItem('login');
	};

	const setLogin = login => {
		localStorage.setItem('login', login);
	};

	return (
		<div className="main">
			<div className="parts">
				<button>EXIT</button>
				<h1 id="countdown">00:10:00</h1>
			</div>

			{getlogin() === 'true' ? null : (
				<>
					<div
						className="left"
						style={{ animation: animation ? 'leftroom 5s ease-in-out forwards' : '' }}></div>
					<div
						className="right"
						style={{ animation: animation ? 'rightroom 5s ease-in-out forwards' : '' }}></div>

					<Loginfrom animation={animation} setAnimation={setAnimation} setLogin={setLogin} />
				</>
			)}
		</div>
	);
};

export default Homescreen;