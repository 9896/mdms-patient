import Authentication from "./Modules/Authentication/Router";
import Home from "./Modules/Home/Router";
import DiseaseRoutes from "./Modules/Disease/Router";

export default [
    ...Authentication,
    ...Home,
    ...DiseaseRoutes,
]