<template>
  <!-- Topnav -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <h1 class="text-center navbar-text">MDMS</h1>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <div class="container-fluid"> -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" style="text-color: white">
          <router-link :to="{ name: 'Articles' }" class="nav-link"
            >Articles</router-link
          >
        </li>
        <li class="nav-item" style="text-color: white">
          <router-link :to="{ name: 'AllSymptoms' }" class="nav-link"
            >Track Symptom</router-link
          >
        </li>
        <li class="nav-item" style="text-color: white">
          <router-link :to="{ name: 'TrackedSymptoms' }" class="nav-link"
            >Tracked Symptoms</router-link
          >
        </li>
        <li class="nav-item" style="text-color: white">
          <router-link :to="{ name: 'Diagnose' }" class="nav-link"
            >Diagnose</router-link
          >
        </li>
      </ul>

      <ul class="navbar-nav navbar-right left">
        <li class="nav-item right" style="text-color: white">
          <router-link :to="{ name: 'Contact' }" class="nav-link"
            >Contact a Doctor</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Profile' }" class="nav-link">
            <i class="fa-solid fa-user" aria-hidden="true"></i>
            <span class="nav-link-text">Profile</span></router-link
          >
        </li>
        <li class="nav-item right" style="text-color: white">
          <a @click="logOut" class="nav-link">
            <span class="nav-link-text">Logout</span></a
          >
        </li>
      </ul>

      <!-- <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" style="text-color: white">
              <router-link :to="{ name: 'Articles' }" class="nav-link"
                >Articles</router-link
              >
            </li>
            <li class="nav-item" style="text-color: white">
              <router-link :to="{ name: 'AllSymptoms' }" class="nav-link"
                >Track Symptom</router-link
              >
            </li>
            <li class="nav-item" style="text-color: white">
              <router-link :to="{ name: 'TrackedSymptoms' }" class="nav-link"
                >Tracked Symptoms</router-link
              >
            </li>
            <li class="nav-item" style="text-color: white">
              <router-link :to="{ name: 'Diagnose' }" class="nav-link"
                >Diagnose</router-link
              >
            </li>
          </ul>

          <ul class="navbar-nav left">
            <li class="nav-item right" style="text-color: white">
              <router-link :to="{ name: 'Contact' }" class="nav-link"
                >Contact a Doctor</router-link
              >
            </li>
            <li class="nav-item right" style="text-color: white">
              <a @click="logOut" class="nav-link">
                <span class="nav-link-text">Logout</span></a
              >
            </li>
          </ul>
        </div>
      </nav> -->
      <!-- <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav left">
            <li class="nav-item right" style="text-color: white">
              <router-link :to="{ name: 'Contact' }" class="nav-link"
                >Contact a Doctor</router-link
              >
            </li>
            <li class="nav-item right" style="text-color: white">
              <a @click="logOut" class="nav-link">
                <span class="nav-link-text">Logout</span></a
              >
            </li>
          </ul>
        </div>
      </nav> -->
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped>
.navbar-text {
  color: rgb(233, 233, 233);
}

nav {
  width: 100%;
}

@media (min-width: 991px) {
  ul.left {
    position: absolute;
    right: 0;
  }
}
</style>