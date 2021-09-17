<template>
  <!-- <div id="page-container">
    <div id="content-wrap"> -->
  <div>
    <!-- --------------------------------------------- -->
    <!-- SideNave -->
    <!-- --------------------------------------------- -->
    <side-nav></side-nav>

    <div class="main-content" id="panel">
      <!-- --------------------------- ----------------->
      <!-- TopNav -->
      <!-- ------------------------------------------ -->
      <top-nav></top-nav>
      <!-- ----------------------------------- -->
      <!-- Slot MainHeader with cards ------------------->
      <!-- ----------------------------------- -->
      <slot name="main-header">
        <vue-page-transition name="fade"> </vue-page-transition>
      </slot>

      <!-- ----------------------------------- -->
      <!--Page Content ------------------->
      <!-- ----------------------------------- -->
      <div class="container-fluid mt--6 content-area">
        <div class="row">
          <div class="col-3">
            <slot name="content"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dicta blanditiis velit consequuntur vel corporis dolor porro, rem
              suscintThe Project Description should provide a clear statement of the work to be undertaken and
should include:
the objectives of the proposed work and its expected significance; as well as the relation of the
proposed work to
the present state of knowledge in the field.
As a general guide, the Project Description should be written in the following fashion: an
Introduction (including, or
as a separate section, the Background and Significance of the work), the Proposed work to be
undertaken and any associated Preliminary Results, the Broader Impacts of the work (on the field
and/or on society in general)
and a Concluding Summary. Within the Project Description the student should outline the
general plan of work, including the
general design of the research to be undertaken, and, where appropriate, provide a clear
description of experimental methods and approaches to be used.
The student should also describe the broader impacts of the work that would result from the
proposed activities, addressing how the project advances the field and the potential benefits of
the proposed work to society at large. Preliminary data should be included, as available, to
support the viability of the proposed work.
In the absence of preliminary data, students should provide suitable examples from the literatures should provide suitable examples from the literature</slot
            >
          </div>
        </div>
        <!-- -------------------------------------------------- -->
        <!-- MainFooter -->
        <!-- -------------------------------------------------- -->
        <main-footer></main-footer>
      </div>
    </div>
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
import TopNav from "./TopNav";
//import MainHeader from "./MainHeader";
import SideNav from "./SideNav";
import MainFooter from "./MainFooter";

export default {
  name: "MainLayout",
  components: {
    TopNav,
    SideNav,
    MainFooter,
  },
};
</script>

<style scoped>
#page-container {
  position: relative;
  min-height: 100vh;

}

#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  /* width: 100%; */
  height: 2.5rem; 
 
}

.footer{
 padding: 0px !important;
}
.content-area {
  margin-top: 30px !important;

  position: relative;
  min-height: 100vh;
  padding-bottom: 2.5rem;
}
</style>