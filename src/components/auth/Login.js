
import React from 'react';
import './login.css';
import {Link} from 'react-router-dom'

export default function Login(props) {
		const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
	} = props;

	return (
		<section className="login">
		 <div  className='loginContainer'>
			<h1>Welcome to ROADEX</h1>
			{!hasAccount && <label>Enter your name</label>}
			{!hasAccount && <input autoFocus type="text" />}
			<label>Email ID</label>
			<input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
    <p className="errorMsg">{emailError}</p>

				<label>Password</label>
			<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    <p className="errorMsg">{passwordError}</p>

				<div className="btnContainer">
     {hasAccount ? (
       <>
							 <button onClick={handleLogin}>Login</button>
								<p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
							</>
						) : (
							<>
							 <button onClick={handleSignup}>Sign Up</button>
								<p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
							</>
						)}
			</div>
			</div>
			<Link to='/admin'><button>ADMIN PANEL</button></Link>
		</section>
	)
}