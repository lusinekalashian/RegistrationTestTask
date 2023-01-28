import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                succeed: payload
            };
        case REGISTER_FAIL:
            return {
                succeed: payload
            };
        default:
            return state;
    }
}