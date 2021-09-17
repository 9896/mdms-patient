<template>
  <main-layout>
    <template slot="main-header">
      all <br />{{ this.$store.access_token }}
      <button @click="logIn" class="btn btn-primary">Submit</button>
      <button @click="alertDisplay" class="btn btn-danger">Submit</button>
      <button @click="alertDisplayOne" class="btn btn-secondary">Submit</button>
    </template>
  </main-layout>
</template>

<script>
export default {
  name: "AllDiseases",
  data() {
    return {
      loader: "dots",
      token: ""
    };
  },
  components: {},

  methods: {
    logIn() {
      this.$store.dispatch('set_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiN2RhZGE0MmE4OGE0YmZlZWZmZTUwMDA5ZTQ3NzY2ZGU0NTRhODI2ZjIwZTE5ZWYwNDMyMzYwZDM2MzBiOTJiZDcyNDM5NmUwZGQ0MjM3ZjIiLCJpYXQiOjE2MzE4NDM5MjUuOTQ0NjU3LCJuYmYiOjE2MzE4NDM5MjUuOTQ0NzM1LCJleHAiOjE2NjMzNzk5MjUuNTMzNTMzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.at1pPAzpqK9StFWVH4joVKZ-cA8mt3m1FwDGK7Rgcti_gc_gRn_IEj8bpxvL8IpaV5Xv2P4Bc2Na7_mRWZJUkhXVQLuD95qAeSOGV2XPsndGdUkxibgPApt0H94kqNOkPjXGTns6cgRGun4kisnpYOFVyA1tMgXCvCSnFZnafMqNNmHoUb64QTfTUxLH6fVSIy8xmtYNT32aMQWWYb9wLeNabnAKbvtp_6m_028HZ4QuXA9TMfLpUN5guDQvO3NfLQzM2TEwjiXz2WAIBSBxOzliw-_jg5MNdTbnpCpWHgYZ0vhhkc4D4kvi2B7DwIsFRTcdjKJpPwVbUmazuziHMH2ly3vp8JWw_2y-6a_Jc5dOzSl1SIvyG5MIj0NtZW04lBaX-nt6tbNwMhm5VIX6XvYrcMSa6_JZ1okh7Hyr0nJ-LfxqJ5jkEjvoz6zPD9VnRZiIpWCtff4aEL_o_RuJSU3edRNhwx6qsAM4JYv4qBNPbHeLKcYCjMvpGLLgfTYszR9MwOQQKFPAodE52b6gKTVEeYSr9rGer1Bh4O5KSf7Mqzq540clxBCUzeOF5_aTyWfsIdBN9O6V11japdOzbJxozSEtOvE3nPPogT73VgnZY7DyIbboczyLl1HPLCYdbnv7xfu4Xs0YPDAG_HbpoqwQPY2buj87FdpMNzdilYc')
      this.token = this.$store.getters.access_token
      let loader = this.$loading.show({
        //container: null,
        isFullPage: true,
        loader: this.loader,
      });
      setTimeout(() => {
        loader.hide();
      }, 3000);
    },

    alertDisplay() {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },

          alertDisplayOne() {
        // $swal function calls SweetAlert into the application with the specified configuration.
        this.$swal('Heading', 'this is a Heading', 'OK');
      }
  },
};
</script>