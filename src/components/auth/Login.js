// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import logo from '../../images/poster.png';

// function Copyright() {
// 	return (
// 		<Typography variant='body2' color='textSecondary' align='center'>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://material-ui.com/'>
// 				ROADEX
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
// }

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		height: '100vh',
// 	},
// 	image: {
// 		backgroundImage: `url(${logo})`,
// 		backgroundRepeat: 'no-repeat',
// 		backgroundColor:
// 			theme.palette.type === 'light'
// 				? theme.palette.grey[50]
// 				: theme.palette.grey[900],
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center',
// 	},
// 	paper: {
// 		margin: theme.spacing(8, 4),
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 	},
// 	avatar: {
// 		margin: theme.spacing(1),
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	form: {
// 		width: '100%', // Fix IE 11 issue.
// 		marginTop: theme.spacing(1),
// 	},
// 	submit: {
// 		margin: theme.spacing(3, 0, 2),
// 	},
// }));

// export default function Login(props) {
// 	const classes = useStyles();
// 	const {
// 		email,
// 		setEmail,
// 		password,
// 		setPassword,
// 		handleLogin,
// 		handleSignup,
// 		hasAccount,
// 		setHasAccount,
// 		emailError,
// 		passwordError,
// 	} = props;

// 	return (
// 		<Grid container component='main' className={classes.root}>
// 			<CssBaseline />
// 			<Grid item xs={false} sm={4} md={7} className={classes.image} />
// 			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
// 				<div className={classes.paper}>
// 					<Avatar className={classes.avatar}>
// 						<LockOutlinedIcon />
// 					</Avatar>
// 					<Typography component='h1' variant='h5'>
// 						{hasAccount ? 'Sign in' : 'Sign Up'}
// 					</Typography>
// 					<form className={classes.form} noValidate>
// 						<TextField
// 							variant='outlined'
// 							margin='normal'
// 							required
// 							fullWidth
// 							id='email'
// 							label='Email Address'
// 							name='email'
// 							autoComplete='email'
// 							autoFocus
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 						/>
// 						<p className="errorMsg">{emailError}</p>
            
// 						<TextField
// 							variant='outlined'
// 							margin='normal'
// 							required
// 							fullWidth
// 							name='password'
// 							label='Password'
// 							type='password'
// 							id='password'
// 							autoComplete='current-password'
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 						<p className="errorMsg">{passwordError}</p>
// 						<div className="btnContainer">
// 						{hasAccount ? (
//        <>
// 							 <Button
// 							type='submit'
// 							fullWidth
// 							variant='contained'
// 							color='primary'
// 							className={classes.submit}
// 							onClick={handleLogin}
// 						>
// 							Sign In
// 						</Button>
// 						<p>Don't have an account ? <span style={{cursor: 'pointer', textDecoration: 'underline', color: 'blue'}} onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
// 							</>
// 						) : (
//        <>
// 							 <Button
// 							type='submit'
// 							fullWidth
// 							variant='contained'
// 							color='primary'
// 							className={classes.submit}
// 							onClick={handleSignup}
// 						>
// 							Sign Up
// 						</Button>
// 						<p>Have an account ? <span style={{cursor: 'pointer', textDecoration: 'underline', color: 'blue'}} onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
// 							</>
// 						)}
// 						</div>
						
// 						<Box mt={5}>
// 							<Copyright />
// 						</Box>
// 					</form>
// 				</div>
// 			</Grid>
// 		</Grid>
// 	);
// }

import React from 'react';
import './login.css';

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
		</section>
	)
}