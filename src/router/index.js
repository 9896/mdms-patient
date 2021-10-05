import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store"
import { routes } from "../App/index"

Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      //for a route that requires auth
      //check if they are authenticated
      if (store.getters.isAuthenticated) {
        console.log(store.getters.isAuthenticated);
        // check role level
        //check if user is admin
        //check if user is authorized
        // if ( to.meta.permission !== '*' && ! ( store.getters.user.permissions.indexOf( to.meta.permission ) >= 0 ))
        // {
        //   return swal('You are not authorized to view this resource', '', 'error')
        // }
      } else {
        router.push({ name: "Login" }).catch(err => {
          console.log(err);
        });
        return true;
      }
    } else {
      //check if they are authenticated
      if (store.getters.isAuthenticated) {
        //do not access strict non auth routes if authenticated
        //prevents users from going back to: login page, forgot password, register
        if (to.matched.some(record => record.meta.strictNoAuth)) {
          router.push({ name: "Home" }).then();
          return true;
        }
      }
    }
  
    //if requires no auth
    next();
  });

export default router;