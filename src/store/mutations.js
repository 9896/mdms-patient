import * as types from "./types";

export default{
    [types.SET_TOKEN]: (state, token) => {
        state.access_token = token;
    }, 

    [types.UNSET_TOKEN]: (state) => {
        state.access_token = "";
    }, 

    [types.SET_USER]: (state, user) => {
        state.user = user;
    },

    [types.UNSET_USER]: state => {
        state.user = {};
    }

}