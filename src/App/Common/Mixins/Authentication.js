import {mapGetters} from "vuex"

let Authentication = {
    data() {
        return{
            authentication_loader: false,
            loader: "dots",
        }
    },

    methods: {
         setUserDetails(url = '/admin-user/me') {//not that a second argument redirect=true, has been removed
             this.authentication_loader = true
        //     // user/me
             this.$axios.get(url)
             .then(response => {
                let user = response.data.data;
                //store user
                if(user) {
                    this.$store.dispatch('set_user', user);
                    this.authentication_loader = false;

                    // if(redirect){
                    // this.$router.push({name: 'Home'});
                    // }
                }
             })
             .catch(error => {
                 this.logOut()
                 console.log(error)
             })
             .finally(()=> this.authentication_loader = false)

        },

        /**
         * Logout
         */
        logOut(){
            //this.authentication_loader = true;
            let loader = this.$loading.show({
                //isFullPage: false,
                loader: this.loader,
                //canCancel: true,
                onCancel: this.cancelled,
              });
            this.$axios({
                baseURL: process.env.VUE_APP_AUTH_API_ROOT,
                url: '/admin/log-out',
                method: 'post',
                data: this.logInData
            }).then(() => {
                this.$store.dispatch('logout');
                this.$router.push({name: 'Login'});
            })
            .catch(err => {
                this.$store.dispatch('logout');
                this.$router.push({name: 'Login'});
                console.log(err)
            })
            .finally(()=> {
                loader.hide();
            })
        },
    },

    /**
     * computed properties mapped from store to each component
     */
    computed: {
        ...mapGetters([
            'isAuthenticated',
            'user'
        ])
    }
}

export default Authentication;
