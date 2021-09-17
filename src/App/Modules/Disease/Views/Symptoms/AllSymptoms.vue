<template>
  <main-layout>
    <template slot="main-header"> </template>
    <template slot="content">
      <div ref="cont" class="cont">
        Sall
        <button @click="logIn">Submit</button>
        {{ this.symptoms.data }}
      </div>
    </template>
  </main-layout>
</template>

<script>
export default {
  name: "AllSymptoms",
  data() {
    return {
      loader: "dots",
      symptoms: [],
    };
  },
  components: {},

  methods: {
    logIn() {
      let cont = this.$refs.cont;
      let loader = this.$loading.show({
        loader: this.loader,
        container: cont,
        canCancel: true,
        onCancel: this.onCancel,
      });
      setTimeout(() => {
        loader.hide();
      }, 9000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    /**
     * Get all symptoms
     */
    getAllSymptoms() {
      this.symptoms = [];
      let loader = this.$loading.show({
        loader: this.loader,
      });
      this.$axios
        .get("/symptom/admin/symptoms/get-all")
        .then((response) => {
          this.symptoms = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => loader.hide());
    },
  },
  created() {
    this.getAllSymptoms();
  },
};
</script>

<style scoped>
.cont {
  position: relative;
}
</style>