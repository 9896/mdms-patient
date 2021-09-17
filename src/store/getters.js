export const isAuthenticated = state => !!state.access_token;
export const access_token = state => state.access_token;
export const user = (state) => state.user;
export const role = (state) => state.user.role;