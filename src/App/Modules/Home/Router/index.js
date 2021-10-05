import { Home } from "../Views";
//import DiseaseRoutes from "@/App/Modules/Disease/Router";

export default [
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
            title: "Home",
            requiresAuth: true
        }
    }
]