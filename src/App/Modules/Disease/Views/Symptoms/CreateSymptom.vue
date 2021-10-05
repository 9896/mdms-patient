<template>
  <form ref="symptomContainer">
    <div class="form-group">
      <label for="symptom-name">Create Symptom</label>
      <input
        v-model="symptomName"
        type="text"
        class="form-control"
        id="symptom-name"
        placeholder="Symptom Name"
      />
    </div>
    <!-- <p v-if="serverResponse" class="text-danger font-weight-light">
      {{ serverResponse }}
    </p> -->

    <!-- <p v-if="updateSuccess" class="text-success font-weight-light">
      {{ updateSuccess[0] }}
    </p> -->
    <button class="btn btn-primary" @click="createSymptom">Create</button>
  </form>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: "CreateSymptom",
  components: {},
  /**
   * properties
   */
  data() {
    return {
      symptomName: "",

      successResponse: false,
      errorResponse: false,
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
    createSymptom() {
      let symptomContainer = this.$refs.symptomContainer;
      let loader = this.$loading.show({
        container: symptomContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      let url =
        "symptom/admin/symptoms/store-symptom";
      this.$axios
        .post(url, {
          name: this.symptomName,
        })
        .then((response) => {
          this.successResponse = response.data[0];
          this.successAlertDisplay();
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors.name[0]);
          //if (error.response.data.errors.name) {
          this.serverResponse = error.response.data.errors.name[0];
          this.errorAlertDisplay(this.serverResponse);
          //}
        })
        .finally(() => loader.hide());
    },

    successAlertDisplay() {
      this.$swal(
        "Creation Successfull",
        "Symptom Created successfully",
        "success"
      );
    },

    errorAlertDisplay(error) {
      this.$swal("Error", error, "error");
    },
  },
  mounted() {},
};
</script>