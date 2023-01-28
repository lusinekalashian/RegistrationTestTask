import UsersModel from "../models/userModel.js";
class UsersController {
    async registration(request, response) {
        const {username, email, password} = request.body;

        const userModel = new UsersModel();

        const result = await userModel.createUser({
            username,
            email,
            password
        });

        response.json({
            success: true,
            data: result
        });
    }
}

export default new UsersController;
