import { useState } from 'react';

const Loginfrom = ({ animation, setAnimation, setLogin }) => {
	const [password, setPassword] = useState('');

	const inputHandler = e => {
		setPassword(e.target.value);
	};

	const sumbitHandler = e => {
		e.preventDefault();
		if (password === 'skyline') {
			// animation for door and form

			setTimeout(() => {
				setLogin(true);
			}, 6000);

			return setAnimation(true);
		}
		return alert('Login Failed, Please enter correct password');
	};

	return (
		<div class="login" style={{ animation: animation ? 'fade 2s ease-in-out forwards' : '' }}>
			<form>
				<h3>Enter Password</h3>
				<br></br>
				<input type="password" placeholder="enter your password here.." onChange={e => inputHandler(e)}></input>
				<br></br>
				<br></br>
				<button onClick={e => sumbitHandler(e)}>Enter Lab</button>
			</form>
		</div>
	);
};

export default Loginfrom;
