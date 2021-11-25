<template>
  <div ref="diseaseContainer">
    <div class="row">
      <div class="col-4">
        <v-text-field
          v-model="diseaseName"
          label="Search by Disease Name"
        ></v-text-field>
      </div>
      <div class="col-4">
        <v-btn small @click="searchDisease"> Search </v-btn>
      </div>
    </div>
    <p v-if="emptyQuery" class="text-danger font-weight-light">
      {{ emptyQuery }}
    </p>
    <p v-if="searchQuery && !noDiseases">
      Showing Results For: {{ staticDiseaseName }}
    </p>
    <p v-if="noDiseases">{{ noSymtoms }}</p>
    <a
      class="btn"
      href="#"
      @click="getAllDiseases"
      v-if="searchQuery || diseases.length == 0"
    >
      <i class="fas fa-sync"></i>Reload Diseases
    </a>

    <v-data-table
      :headers="headers"
      :items="diseases"
      disable-pagination
      :hide-default-footer="true"
    >
      <template v-slot:item.actions="{ item }">
        <div class="nowrap-buttons">
          <router-link
            class="btn btn-tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
            data-container="body"
            data-animation="true"
            :to="{ name: 'EditDisease', params: { uuid: item.uuid } }"
          >
            <i class="fas fa-edit"></i>
          </router-link>
          <a
            class="btn btn-tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
            data-container="body"
            data-animation="true"
            href="#"
            @click="deleteAlertDisplay(item.uuid)"
          >
            <i class="fas fa-trash-alt"></i>
          </a>
        </div>
      </template>

      <template v-slot:item.content="{ item }">
        <p v-html="item.content"></p>
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
  name: "AllDiseases",
  data() {
    return {
      loader: "dots",
      diseases: [],
      diseaseName: "",
      staticDiseaseName: "",
      searchQuery: false,
      noDiseases: false,
      emptyQuery: false,
      page: undefined,
      pageCount: undefined,
      activePage: "",
      headers: [
        { text: "Diseases", align: "start", value: "name" },
        { text: "Content", sortable: false, value: "content" },
        { text: "Prevalence Rate", sortable: false, value: "prevelance_rate" },
        { text: "Age start", sortable: false, value: "age_start" },
        { text: "Age end", sortable: false, value: "age_end" },
        { text: "Actions", sortable: false, value: "actions" },
      ],
    };
  },
  components: {},

  /**
   * methods
   */

  methods: {
    /**
     * Get all diseases
     *
     * @param null
     * @return {null}
     */
    getAllDiseases() {
      this.searchQuery = false;
      this.diseaseName = "";
      this.emptyQuery = false;
      let diseaseContainer = this.$refs.diseaseContainer;
      console.log(this.$refs.diseaseContainer);
      let loader = this.$loading.show({
        container: diseaseContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      //get-all for diseases
      this.$axios
        .get("disease/admin/diseases/get-all", {
          params: {
            page: this.page,
          },
        })
        .then((response) => {
          let unMappedDiseases = response.data.data;
          this.diseases = [];
          this.diseases = unMappedDiseases.map(this.getDisplayDisease);
          this.page = response.data.meta.current_page;
          this.pageCount = response.data.meta.last_page;
          console.log("From Get all Diseases: " + this.page);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => loader.hide());
    },

    /**
     * Link to data-table headers
     *
     * @param {disease}
     * @return {disease} The disease Object
     */
    getDisplayDisease(disease) {
      let slicedContent;
      if (disease.content.length > 45) {
        slicedContent = disease.content.slice(0, 45) + "...";
      }
      //kdkd
      return {
        name: disease.name,
        uuid: disease.uuid,
        content: slicedContent,
        prevlance_rate: disease.prevelance_rate,
        age_start: disease.age_start,
        age_end: disease.age_end,
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
        this.getAllDiseases();
      } else {
        this.searchDisease();
      }
      console.log(value);
    },

    /**
     * Search specific symtom(s)
     *
     * @param { null }
     * @return { string } noDisease No disease found
     */
    searchDisease() {
      let diseaseContainer = this.$refs.diseaseContainer;
      this.diseases = [];
      this.emptyQuery = false;
      this.page = undefined;
      //this.emptyQuery
      let loader = this.$loading.show({
        container: diseaseContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      //get-all for diseases
      this.$axios
        .post(
          "disease/admin/diseases/get-diseases",
          {
            disease: this.diseaseName,
          },
          {
            params: {
              page: this.page,
            },
          }
        )
        .then((response) => {
          let unMappedDiseases = [];
          unMappedDiseases = response.data.data;
          this.diseases = [];
          this.searchQuery = true;
          this.staticDiseaseName = this.diseaseName;
          if (unMappedDiseases.length == 0) {
            return (this.noDiseases = response.data);
          }
          this.diseases = unMappedDiseases.map(this.getDisplayDisease);
          this.page = response.data.meta.current_page;
          this.pageCount = response.data.meta.last_page;

          console.log("hehe" + response.data);
        })
        .catch((error) => {
          console.log("Custom Error:" + error);
          if (error.response.data.errors.disease) {
            this.emptyQuery = error.response.data.errors.disease[0];
          }
        })
        .finally(() => loader.hide());
    },

    /**
     * Delete disease
     *
     * @param { string } uuid
     * @return { null }
     */
    deleteDisease(uuid) {
      let diseaseContainer = this.$refs.diseaseContainer;
      //this.emptyQuery
      let loader = this.$loading.show({
        container: diseaseContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      //get-all for diseases
      let url = "disease/admin/diseases/delete-disease/" + uuid;
      this.$axios
        .post(url)
        .then((response) => {
          console.log("hehe" + response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => loader.hide());
    },

    deleteAlertDisplay(uuid) {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        console.log(result.value);
        if (result.value) {
          this.deleteDisease(uuid);
          this.getAllDiseases();
        }
      });
    },
  },
  mounted() {
    this.getAllDiseases();
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