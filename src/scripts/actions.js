import {User} from './models/models'
 

const ACTIONS = {

	registerUser: function(userObj){
		User.register(userObj).then(()=>this.logUserIn(userObj.email,userObj.password), 
			(err)=>{
				alert("Failure to Register")
				console.log(err)
			}
		)
	},

	logUserIn: function(email, password){
		User.login(email,password).then(
			(response)=>{
				alert(`user ${email} logged in!!`)
				console.log(response);
				location.hash = "home"
			},
			(err)=>{
				alert("Failure! No User")
				console.log(err)
			}
		)

	}, 

	logUserOut: function(){
		User.logout().then(
			()=> location.hash="login"
		)
	}

}

export default ACTIONS