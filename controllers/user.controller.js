var userService =  require('../services/user.service')

class UserController{
	async GetAllUser(req, res){
		await res.json(userService.GetAllUser())
	}
	
	async CreateUser(req, res){
		await res.json(userService.CreateUser(req.body));
	}
	
	async GetUserById(req, res){
		await res.json(userService.GetUserById(req.params.id));
	}
	async UpdateUserById(req, res){
		// params => datos de url
		//  body => datos del payload
		await res.json(userService.UpdateUserById(req.params.id, req.body));
	}
	async DeleteUserById(req, res){
		await res.json(userService.DeleteUserById(req.params.id));
	}
}
module.exports = new UserController();
