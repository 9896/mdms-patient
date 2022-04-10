<template>
  <auth-layout>
    <template slot="content">
      <div class="main-content">
        <!-- Header -->
        <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
          <div class="container">
            <div class="header-body text-center mb-7">
              <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                  <h1 class="text-white">Reset Password</h1>
                  <p class="text-lead text-white">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                class="fill-default"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">
          <!-- Table -->
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
              <div class="card bg-secondary border-0">
                <div class="card-header bg-transparent pb-5">
                  <div class="text-muted text-center mt-2 mb-4">
                    <small>Reset Password</small>
                  </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                  <form role="form">
                    <div class="form-group">
                      <div
                        class="
                          input-group input-group-merge input-group-alternative
                          mb-3
                        "
                      >
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="ni ni-email-83"></i
                          ></span>
                        </div>
                        <input
                          v-model="registrationData.email"
                          class="form-control"
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                    </div>
                    <p
                      v-if="errorResponse.email"
                      class="text-danger font-weight-light"
                    >
                      {{ errorResponse.email[0] }}
                    </p>

                    <div class="form-group">
                      <div
                        class="
                          input-group input-group-merge input-group-alternative
                        "
                      >
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="ni ni-lock-circle-open"></i
                          ></span>
                        </div>
                        <input
                          v-model="registrationData.password"
                          class="form-control"
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                    </div>
                    <p
                      v-if="errorResponse.password"
                      class="text-danger font-weight-light"
                    >
                      {{ errorResponse.password[0] }}
                    </p>

                    <div class="form-group">
                      <div
                        class="
                          input-group input-group-merge input-group-alternative
                        "
                      >
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="ni ni-lock-circle-open"></i
                          ></span>
                        </div>
                        <input
                          v-model="registrationData.confirmPassword"
                          class="form-control"
                          placeholder="Confirm Password"
                          type="password"
                        />
                      </div>
                    </div>
                    <p
                      v-if="confirmPassword"
                      class="text-danger font-weight-light"
                    >
                      {{ confirmPassword }}
                    </p>

                    <div class="row my-4">
                      <div class="col-12">
                        <div
                          class="
                            custom-control
                            custom-control-alternative
                            custom-checkbox
                          "
                        ></div>
                      </div>
                    </div>
                    <div class="text-center">
                      <span>
                        <router-link :to="{ name: 'Login' }" class="nav-link">
                          <span class="nav-link-inner--text"
                            >Already a member? Login</span
                          >
                        </router-link>
                      </span>
                      <button
                        type="button"
                        class="btn btn-primary mt-4"
                        @click="registerUser"
                      >
                        Reset 
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </auth-layout>
</template>

<script>
import AuthLayout from "@/App/Modules/Authentication/Components/AuthLayout";

export default {
  name: "Reset",
  components: {
    AuthLayout,
  },
  /**
   * data
   */
  data() {
    return {
      registrationData: {
        first_name: "a",
        last_name: "b",
        password: "",
        confirmPassword: "",
        phone_number: 654321,
        email: "g@gmail.com",
      },
      formError: [],
      loader: "spinner",
      rep: "",
      successResponse: false,
      errorResponse: false,
      confirmPassword: false,
    };
  },

  /**
   * methods
   */
  methods: {
    /**
     * Create symptom
     *
     * @param { null }
     * @return { null }
     */
    registerUser() {
      this.confirmPassword = false;
      this.errorResponse = false;
      if (
        this.registrationData.password != this.registrationData.confirmPassword
      ) {
        this.confirmPassword = "Please ensure that the passwords match";
        return;
      }
      let symptomContainer = this.$refs.symptomContainer;
      let loader = this.$loading.show({
        container: symptomContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      console.log(
        this.registrationData.firstName +
          this.registrationData.lastName +
          this.registrationData.email +
          this.registrationData.phoneNumber +
          this.registrationData.password
      );

      let url = "/patient/patients/reset";
      this.$axios
        .post(url, this.registrationData)
        .then((response) => {
          this.successResponse = response.data;
          this.successAlertDisplay();
          //this.$router.push({ name: "Home" });
          //this.logIn();
        })
        .catch((error) => {
          console.log(error);
          //console.log(error.response.data.errors);
          if (error.response) {
            this.errorResponse = error.response.data.errors;
            //this.errorAlertDisplay(this.errorResponse);
          }
        })
        .finally(() => loader.hide());
    },

    logIn() {
      //console.log("LoginData : "+this.email +" "+ this.password);
      let loader = this.$loading.show({
        loader: this.loader,
      });
      this.combinationError = false;
      this.formError = [];
      this.$axios
        .post("/authentication/doctors/login", {
          email: this.registrationData.email,
          password: this.registrationData.password,
        })
        .then((response) => {
          if (response.data[0].message) {
            this.combinationError = response.data[0].message;
          }
          let token = response.data[0].access_token;
          console.log(response.data[0].access_token);
          if (token) {
            console.log("Manze Token" + token);
            this.$store.dispatch("set_token", token);
            this.setUserDetails("/doctor/me");
            this.$router.push({ name: "Home" });
          }
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data.errors !== undefined) {
              this.formError = err.response.data.errors;
            }
          }
          console.log("blah:" + err);
        })
        .finally(() => loader.hide());
    },

    successAlertDisplay() {
      this.$swal({
        title: "Password Update Successful",
        text: "Visit login page",
        type: "success",
        confirmButtonText: "Yes please",
        showCloseButton: true,
      }).then((result) => {
        console.log(result.value);
        if (result.value) {
          this.$router.push({ name: "Login" });
        }
      });
    },

    errorAlertDisplay(error) {
      this.$swal("Error", error, "error");
    },
  },
};
</script>