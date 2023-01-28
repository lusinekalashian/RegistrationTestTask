import Validator from 'validatorjs';
import UsersModel from "../models/userModel.js";

const registration = async (request, response, next) => {
    const validationRule = {
        "email": "required|string|email",
        "username": "required|string|min:3",
        "password": "required|string|min:6",
    };

    const userModel = new UsersModel();

    const result = await userModel.getUserByEmail(request.body.email);

    const validation = new Validator(request.body, validationRule);
    validation.passes(() => {
        if(result) {
            response.json({
                success: false,
                message: 'User already exist!',
            });
        } else {
            next();
        }
    });
    validation.fails(() => {
        response.json({
            success: false,
            message: 'Validation failed!',
            data: validation.errors
        });
    });
}

export {
    registration
}