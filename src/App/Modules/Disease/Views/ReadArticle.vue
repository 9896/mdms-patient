<template>
  <div ref="diseaseContainter" class="row">
    <div class="col"></div>
    <div class="col-lg-6">
      <!-- Disease Name and Content -->
      <div>
        <h1>{{ disease.name }}</h1>

        <p v-html="disease.content"></p>
      </div>
      <!-- Symptoms -->
      <div>
        <h2>Symptoms</h2>
        <ul id="example-1">
          <li v-for="symptom in disease.symptoms" :key="symptom.uuid">
            <p>{{ symptom.name }}</p>
          </li>
        </ul>
        <!-- Prevelance Rate -->
        <div v-if="disease.prevelance_rate">
          <h3>Prevalence Rate</h3>
          <p>{{ disease.prevelance_rate }}</p>
        </div>

        <!-- Ages Affected -->
        <div v-if="disease.age_start || disease.age_end">
          <h3>Ages Affected</h3>
          <p>{{ disease.age_start }} - {{ disease.age_end }}</p>
        </div>
      </div>

      <!-- Disease Category -->
      <div v-if="disease.disease_categories.count > 0">
        <h3>Disease Category</h3>
        <ul id="example-1">
          <li
            v-for="category in disease.disease_categories"
            :key="category.uuid"
          >
            <p>{{ category.name }}</p>
          </li>
        </ul>
      </div>

      <!-- Disease Classifications -->
      <div v-if="disease.disease_classifications.count > 0">
        <h3>Disease Category</h3>
        <ul id="example-1">
          <li
            v-for="classification in disease.disease_classifications"
            :key="classification.uuid"
          >
            <p>{{ classification.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
export default {
  /**
   * name
   */
  name: "ReadArticle",

  /**
   * data
   */
  data() {
    return {
      disease: {
        name: "",
        uuid: "",
        content: "",
        prevelance_rate: "",
        age_start: "",
        age_end: "",
        symptoms: [],
        disease_classifications: [],
        disease_categories: [],
      },
    };
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Get specific disease
     *
     * @param { null }
     * @return { null }
     */
    getDisease() {
      let diseaseContainer = this.$refs.diseaseContainer;
      let loader = this.$loading.show({
        container: diseaseContainer,
        //isFullPage: false,
        loader: this.loader,
        //canCancel: true,
        onCancel: this.cancelled,
      });
      let url = "disease/patient/diseases/get-disease/" + this.$route.params.uuid;
      this.$axios
        .get(url)
        .then((response) => {
          let data = response.data.data;
          this.disease.name = data.name;
          this.disease.uuid = data.uuid;
          this.disease.content = data.content;
          this.disease.prevelance_rate = data.prevelance_rate;
          this.disease.age_start = data.age_start;
          this.disease.age_end = data.age_end;
          this.disease.symptoms = data.symptoms;
          this.disease.disease_categories = data.categories;
          this.disease.disease_classifications = data.classifications;
          console.log("Haya ndo hii symptoms:");
          console.log(this.disease.symptoms);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => loader.hide());
    },
  },

  /**
   * Mounted hook
   */
  mounted() {
    this.getDisease();
  },
};
</script>