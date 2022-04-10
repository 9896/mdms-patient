<template>
  <div ref="symptomContainer">
    <h1>Track Symptom</h1>
    <div class="row">
      <div class="col-lg-4">
        <!-- <v-text-field
          v-model="symptomName"
          label="Search by Symptom Name"
        ></v-text-field> -->
        <v-autocomplete
          :items="inputSymptoms"
          v-model="selectedSymptom"
          item-text="name"
          item-value="name"
          clearable
          label="Search by Symptom Name"
          @keyup.enter="searchSymptom"
        ></v-autocomplete>
      </div>
      <div class="col-lg-4">
        <v-btn small @click="searchSymptom"> Search </v-btn>
      </div>
    </div>

    <p v-if="emptyQuery" class="text-danger font-weight-light">
      {{ emptyQuery }}
    </p>
    <p v-if="searchQuery && !noSymptoms">
      Showing Results For: {{ staticSymptomName }}
    </p>
    <p v-if="noSymptoms">{{ noSymtoms }}</p>
    <a
      class="btn"
      href="#"
      @click="getAllSymptoms"
      v-if="searchQuery || symptoms.length == 0"
    >
      <i class="fas fa-sync"></i>Reload Symptoms
    </a>

    <v-data-table
      :headers="headers"
      :items="symptoms"
      disable-pagination
      :hide-default-footer="true"
    >
      <template v-slot:item.actions="{ item }">
        <div class="nowrap-buttons">
          <router-link
            class="btn btn-tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Track Symptom"
            data-container="body"
            data-animation="true"
            :to="{ name: 'TrackSymptom', params: { uuid: item.uuid } }"
          >
            <i class="fas fa-assistive-listening-systems"></i>
          </router-link>
        </div>
      </template>
    </v-data-table>

    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="6"
        @input="handlePageChange"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllSymptoms",
  data() {
    return {
      loader: "dots",
      symptoms: [],
      inputSymptoms: [],
      selectedSymptom: '',
      symptomName: "",
      staticSymptomName: "",
      searchQuery: false,
      noSymptoms: false,
      emptyQuery: false,
      page: undefined,
      pageCount: undefined,
      activePage: "",
      headers: [
        { text: "Symptoms", align: "start", value: "name" },
        { text: "Actions", sortable: false, value: "actions" },
        //{ text: "Uuid", sortable: "false", value: "uuid" }
      ],
    };
  },
  components: {},

  /**
   * methods
   */

  methods: {
    /**
     * Get all symptoms
     *
     * @param null
     * @return {null}
     */
    getAllSymptoms() {
      this.searchQuery = false;
      this.symptomName = "";
      this.emptyQuery = false;
      let symptomContainer = this.$refs.symptomContainer;
      console.log(this.$refs.symptomContainer);
      let loader = this.$loading.show({
        container: symptomContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      //get-all for symptoms
      this.$axios
        .get("symptom/patient/symptoms/get-all", {
          params: {
            page: this.page,
          },
        })
        .then((response) => {
          let unMappedSymptoms = response.data.data;
          this.symptoms = [];
          this.symptoms = unMappedSymptoms.map(this.getDisplaySymptom);
          this.page = response.data.meta.current_page;
          this.pageCount = response.data.meta.last_page;
          console.log("From Get all Symptoms: " + this.page);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => loader.hide());
    },

        /**
     * Get all symptoms
     *
     * @param null
     * @return {null}
     */
    getAllInputSymptoms() {
      this.symptomName = "";
      let symptomContainer = this.$refs.symptomContainer;
      console.log(this.$refs.symptomContainer);
      let loader = this.$loading.show({
        container: symptomContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      //get-all for symptoms
      this.$axios
        .get("symptom/patient/symptoms/get-all/true")
        .then((response) => {
          let unMappedSymptoms = response.data.data;
          this.inputSymptoms = [];
          this.inputSymptoms = unMappedSymptoms.map(this.getDisplaySymptom);

          console.log("From Get all Symptoms: ");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => loader.hide());
    },

    /**
     * Link to data-table headers
     *
     * @param {symptom}
     * @return {symptom} The symptom Object
     */
    getDisplaySymptom(symptom) {
      return {
        name: symptom.name,
        uuid: symptom.uuid,
      };
    },

    /**
     * Handle page change
     *
     * @param { number } value The page number clicked
     * @return { null }
     */
    handlePageChange(value) {
      this.page = value;
      if (this.searchQuery == false) {
        this.getAllSymptoms();
      } else {
        this.searchSymptom();
      }
      console.log(value);
    },

    /**
     * Search specific symtom(s)
     *
     * @param { null }
     * @return { string } noSymptom No symptom found
     */
    searchSymptom() {
      let symptomContainer = this.$refs.symptomContainer;
      this.symptoms = [];
      this.emptyQuery = false;
      this.page = undefined;
      //this.emptyQuery
      let loader = this.$loading.show({
        container: symptomContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      //get-all for symptoms
      this.$axios
        .post(
          "symptom/patient/symptoms/get-symptoms",
          {
            symptom: this.selectedSymptom,
          })
        .then((response) => {
          let unMappedSymptoms = [];
          unMappedSymptoms = response.data.data;
          this.symptoms = [];
          this.searchQuery = true;
          this.staticSymptomName = this.selectedSymptom;
          if (unMappedSymptoms.length == 0) {
            return (this.noSymptoms = response.data);
          }
          this.symptoms = unMappedSymptoms.map(this.getDisplaySymptom);
          this.page = response.data.meta.current_page;
          this.pageCount = response.data.meta.last_page;

          console.log("hehe" + response.data);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.errors.symptom) {
            this.emptyQuery = error.response.data.errors.symptom[0];
          }
        })
        .finally(() => {
          this.getAllInputSymptoms();
          loader.hide()
          });
          
    },
  },
  mounted() {
    this.getAllInputSymptoms();
    this.getAllSymptoms();
  },
};
</script>

<style scoped>
.cont {
  position: relative;
}

.nowrap-buttons {
  white-space: nowrap !important;
}

.search-group {
  white-space: nowrap;
}
</style>