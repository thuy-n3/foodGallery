<<<<<<< HEAD
=======
//COPIED FROM MONGO MESSAGES

>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
import React from 'react'
import ACTIONS from '../actions'
import Header from './header'

const LoginView = React.createClass({
<<<<<<< HEAD
	render: function() {
		return (
			<div className="loginView">
				<Header />
				<RegisterBox />
				<LoginBox />
			</div>
			)
	}
=======
    render: function() {
        return (
            <div className="loginView">
                <Header />
                <RegisterBox />
                <LoginBox />
            </div>
            )
    }
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
})

const RegisterBox = React.createClass({

<<<<<<< HEAD
	_handleRegister: function(evt) {
		evt.preventDefault()
		ACTIONS.registerUser({
			email: evt.currentTarget.email.value,
			password: evt.currentTarget.password.value,
			name: evt.currentTarget.userName.value
		})

		evt.currentTarget.reset()
	},

	render: function() {
		return (
			<div className="loginBox register">
				<form onSubmit={this._handleRegister} >
					<h3>Register</h3>
					<input type="email" name="email" placeholder="enter your email" />
					<input type="password" name="password" placeholder="enter a password" />
					<input type="text" name="userName" placeholder="enter your name" />
					<button type="submit">sign up!</button>
				</form>
			</div>
			)
	}
})

const LoginBox = React.createClass({
	_handleLogin: function(evt) {
		evt.preventDefault()
		ACTIONS.logUserIn(evt.target.email.value,evt.target.password.value)
	},

	render: function() {
		return (
			<div className="loginBox login">
				<form onSubmit={this._handleLogin} >
					<h3>Log in</h3>
					<input type="email" name="email" placeholder="enter your email" />
					<input type="password" name="password" placeholder="enter a password" />
					<input type="text" name="userName" placeholder="enter your name" />
					<button type="submit">log in!</button>
				</form>
			</div>
			)
	}
=======
    _handleRegister: function(evt) {
        evt.preventDefault()
        ACTIONS.registerUser({
            email: evt.currentTarget.email.value,
            password: evt.currentTarget.password.value,
            name: evt.currentTarget.userName.value
        })
    },

    render: function() {
        return (
            <div className="loginBox register">
                <form onSubmit={this._handleRegister} >
                    <h3>Register</h3>
                    <input name = 'userName' placeholder = 'please enter your name' /> {/* ADDED ONE INPUT*/}
                    <input type="email" name="email" placeholder="enter your email" />
                    <input type="password" name="password" placeholder="enter a password" />
                    <button type="submit">sign up!</button>
                </form>
            </div>
            )
    }
})

const LoginBox = React.createClass({
    _handleLogin: function(evt) {
        evt.preventDefault()
        ACTIONS.logUserIn(evt.target.email.value,evt.target.password.value)
    },

    render: function() {
        return (
            <div className="loginBox login">
                <form onSubmit={this._handleLogin} >
                    <h3>Log in</h3>
                    <input type="email" name="email" placeholder="enter your email" />
                    <input type="password" name="password" placeholder="enter a password" />
                    <button type="submit">log in!</button>
                </form>
            </div>
            )
    }
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
})
export default LoginView