import { Login } from "@/App/Modules/Authentication/Views";
import { Register } from "@/App/Modules/Authentication/Views";

export default [
    {
        path: "/login",
        component: Login,
        name: "Login",
        meta: {
            title: "Login"
        }
    },
    {
        path: "/register",
        component: Register,
        name: "Register",
        meta: {
            title: "Register"
        }
    }
]