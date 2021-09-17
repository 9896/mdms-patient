import * as types from "./types";
// import router from "../router/index.js";

export const set_token = ({ commit }, token) => {
    commit(types.SET_TOKEN, token);
};

export const unset_token = ({ commit }) => {
    commit(types.UNSET_TOKEN);
};

export const set_user = ({ commit }, user) => {
    commit(types.SET_USER, user);
}

export const unset_user = ({ commit }) => {
    commit(types.UNSET_USER);
}

export const logout = context => {
    context.dispatch("unset_token");
    context.dispatch("unset_user");
    // router.push({name: "login"}).catch(err => {
    //     console.log(err);
    // });
}