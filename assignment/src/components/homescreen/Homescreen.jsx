import React from 'react';
import Loginfrom from '../Loginform';
import './homescreen.css';
import Timer from '../timer/Timer'

const Homescreen = () => {
	const [animation, setAnimation] = React.useState(false);

	const getlogin = () => {
		return JSON.parse(localStorage.getItem('login'));
	};

	const [isLoggedIn, setIsLoggedIn] = React.useState(getlogin());

	const setLogin = login => {
		localStorage.setItem('login', login);
	};

	return (
		<div className="main">
			<div className="parts">
				<button
					onClick={() => {
						setLogin(false);
						setIsLoggedIn(false);
						setAnimation(false);
					}}>
					EXIT
				</button>
				<h1 id="countdown">00:10:00</h1>
			</div>

			{isLoggedIn ? null : (
				<>
					<div
						className="left"
						style={{ animation: animation ? 'leftroom 5s ease-in-out forwards' : '' }}></div>
					<div
						className="right"
						style={{ animation: animation ? 'rightroom 5s ease-in-out forwards' : '' }}></div>

					<Loginfrom
						animation={animation}
						setAnimation={setAnimation}
						setLogin={setLogin}
						setIsLoggedIn={setIsLoggedIn}
					/>
				</>
			)}
		</div>
	);
};

export default Homescreen;
