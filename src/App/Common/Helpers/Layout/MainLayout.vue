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
          <div class="col">
            <slot name="content"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dicta blanditiis velit consequuntur vel corporis  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, sed ea explicabo impedit temporibus voluptatum nostrum tenetur enim ab neque deleniti officiis id placeat quae, ex molestias numquam tempora atque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum iure? Maiores cumque tenetur eius at placeat! Placeat magnam, autem in, natus aperiam laborum molestiae non voluptatibus aliquam veniam rem. </slot
            >
          </div>
        </div>
        <!-- -------------------------------------------------- -->
        <!-- MainFooter -->
        <!-- -------------------------------------------------- -->
        <!-- <main-footer></main-footer> -->
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
//import MainFooter from "./MainFooter";

export default {
  name: "MainLayout",
  components: {
    TopNav,
    SideNav,
  //  MainFooter,
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