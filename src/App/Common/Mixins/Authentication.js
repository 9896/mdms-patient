import {mapGetters} from "vuex"

let Authentication = {
    data() {
        return{
            authentication_loader: false
        }
    },

    methods: {
         setUserDetails(url = '/admin-user/me', redirect = true) {
             this.authentication_loader = true
        //     // user/me
             this.$axios.get(url)
             .then(response => {
                let user = response.data.data;
                //store user
                if(user) {
                    this.$store.dispatch('set_user', user);
                    this.authentication_loader = false;

                    if(redirect){
                    this.$router.push({name: 'Home'});
                    }
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
            this.authentication_loader = true;
            this.$axios({
                baseURL: process.env.VUE_APP_AUTH_API_ROOT,
                url: '/admin/log-out',
                method: 'post',
                data: this.logInData
            }).then(() => {
                this.$store.dispatch('logout');
            })
            .catch(err => {
                this.$store.dispatch('logout').then();
                console.log(err)
            })
            .finally(()=> this.authentication_loader = false)
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
