<template>
  <form ref="symptomContainer">
    <div class="form-group">
      <label for="symptom-name">Edit Symptom</label>
      <input
        v-model="symptomName"
        type="text"
        class="form-control"
        id="symptom-name"
        placeholder="New Symptom Name"
      />
    </div>
    <!-- <p v-if="serverResponse" class="text-danger font-weight-light">
      {{ serverResponse }}
    </p>

    <p v-if="updateSuccess" class="text-success font-weight-light">
      {{ updateSuccess[0] }}
    </p> -->
    <button class="btn btn-primary" @click="updateSymptom">update</button>
  </form>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: "EditSymptom",
  components: {},
  /**
   * properties
   */
  data() {
    return {
      symptomName: "",
      symptom: {
        name: "",
        uuid: "",
      },
      updateSuccess: false,
      serverResponse: false,
    };
  },
  /**
   * methods
   */
  methods: {
    getSymptom() {
      let symptomContainer = this.$refs.symptomContainer;
      let loader = this.$loading.show({
        container: symptomContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      let url = "symptom/admin/symptoms/get-symptom/" + this.$route.params.uuid;
      this.$axios
        .get(url)
        .then((response) => {
          this.symptomName = response.data.data.name;
          this.symptom.name = response.data.data.name;
          this.symptom.uuid = response.data.data.uuid;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => loader.hide());
    },
    updateSymptom() {
      this.udpateSucces = false;
      this.serverResponse = false;
      let symptomContainer = this.$refs.symptomContainer;
      let loader = this.$loading.show({
        container: symptomContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      let url = "symptom/admin/symptoms/update-symptom/" + this.$route.params.uuid;
      this.$axios
        .post(url, {
          name: this.symptomName
        })
        .then((response) => {
          this.updateSuccess = response.data
          console.log(this.updateSuccess)
          this.successAlertDisplay();
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors.name[0]);
          //if (error.response.data.errors.name) {
            this.serverResponse = error.response.data.errors.name[0];
            this.errorAlertDisplay(this.serverResponse)
          //}
        })
        .finally(() => loader.hide());
    },

    successAlertDisplay() {
      this.$swal(
        "Update Successfull",
        "Symptom updated successfully",
        "success"
      )
    },

    errorAlertDisplay(error) {
      this.$swal(
        "Error",
         error,
        "error",
      )
    },
  },
  mounted() {
    this.getSymptom();
  },
};
</script>