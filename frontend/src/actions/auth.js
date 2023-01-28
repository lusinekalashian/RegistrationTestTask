import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
        (response) => {
            if (response.data.success) {
                dispatch({
                    type: REGISTER_SUCCESS,
                    succeed: true,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: 'Registration Succeed!',
                });

                return Promise.resolve();
            } else {
                dispatch({
                    type: REGISTER_FAIL,
                    succeed: true,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });

                return Promise.reject();
            }
        },
    );
};
