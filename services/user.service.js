const userData = require("../db/context");

class UserService{
	GetAllUser(){ 
		return userData;
	}

	CreateUser(data){ 
		userData.push(data); 
		return "Usuario creado";
	}

	GetIndex(id){ 
		return userData.findIndex(
					function(data){ 
						return data.id.toString() === id.toString();
					});
	}
	GetUserById(id){
		let index = this.GetIndex(id);
		return userData[index];
	}
	
	UpdateUserById(id, user){
		let index = this.GetIndex(id);
		userData[index].email = user.email;
		userData[index].name = user.name;
		userData[index].userName = user.userName;
		userData[index].createDate = user.createDate;
		userData[index].password = user.password;
		return "Usuario actualizado";
	}
	
	DeleteUserById(id){
		let index = this.GetIndex(id)
		userData.splice(index, 1);
		return "usuario eliminado";
	}
}
module.exports = new UserService();