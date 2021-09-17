  <template>
  <!-- Sidenav -->
  <nav
    class="
      sidenav
      navbar navbar-vertical
      fixed-left
      navbar-expand-xs navbar-light
      bg-white
    "
    id="sidenav-main"
  >
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <!-- <img src="assets/img/brand/blue.png" class="navbar-brand-img" alt="..."> -->
          MDMS
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->

          <ul class="navbar-nav">
            <li class="nav-item">
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <a
                        data-toggle="collapse"
                        href="#collapseOne"
                        role="button"
                        ref="diseaseCollapse"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        @click="toggleDiseaseBoldArrow"
                        ><span class="nav-link-text">Diseases</span></a
                      >
                      <a
                        class="pdsa-panel-toggle ni"
                        :class="diseaseBoldArrow"
                      ></a>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <router-link
                          :to="{name:'AllDiseases'}"
                          class="list-group-item list-group-item-action"
                          >All Diseases</router-link
                        >
                        <router-link
                          :to="{name:'Articles'}"
                          class="list-group-item list-group-item-action"
                          >Articles</router-link
                        >
                        <router-link
                          :to="{name:'CreateDisease'}"
                          class="list-group-item list-group-item-action"
                          >Create Disease</router-link
                        >
                        <router-link
                          :to="{name:'EditDisease'}"
                          class="list-group-item list-group-item-action"
                          >Edit Disease</router-link
                        >
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <a
                        data-toggle="collapse"
                        href="#collapseTwo"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                        @click="toggleSymptomBoldArrow"
                        ><span class="nav-link-text">Symptoms</span></a
                      >
                      <a
                        class="pdsa-panel-toggle ni"
                        :class="symptomBoldArrow"
                      ></a>
                    </h5>
                  </div>

                  <div
                    id="collapseTwo"
                    class="collapse show"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                    ref="collapsibleBodyTwo"
                  >
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <router-link
                          :to="{name:'AllSymptoms'}"
                          class="list-group-item list-group-item-action"
                          >All Symptoms</router-link
                        >
                        <router-link
                          :to="{name:'CreateSymptom'}"
                          class="list-group-item list-group-item-action"
                          >Create Symptom</router-link
                        >
                        <router-link
                          :to="{name:'EditSymptom'}"
                          class="list-group-item list-group-item-action"
                          >Edit Symptom</router-link
                        >
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="examples/icons.html">
                <i class="ni ni-planet text-orange"></i>
                <span class="nav-link-text">Ions</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="examples/map.html">
                <i class="ni ni-pin-3 text-primary"></i>
                <span class="nav-link-text">Google</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="examples/profile.html">
                <i class="ni ni-single-02 text-yellow"></i>
                <span class="nav-link-text">Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="examples/tables.html">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Tables</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'Login'}" class="nav-link">
                <i class="ni ni-key-25 text-info"></i>
                <span class="nav-link-text">Login</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="examples/register.html">
                <i class="ni ni-circle-08 text-pink"></i>
                <span class="nav-link-text">Register</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="examples/upgrade.html">
                <i class="ni ni-send text-dark"></i>
                <span class="nav-link-text">Upgrade</span>
              </a>
            </li>
          </ul>
          <!-- Divider -->
          <hr class="my-3" />
          <!-- Heading -->
          <h6 class="navbar-heading p-0 text-muted">
            <span class="docs-normal">Documentation</span>
          </h6>
          <!-- Navigation -->
          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html"
                target="_blank"
              >
                <i class="ni ni-spaceship"></i>
                <span class="nav-link-text">Getting started</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html"
                target="_blank"
              >
                <i class="ni ni-palette"></i>
                <span class="nav-link-text">Foundation</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html"
                target="_blank"
              >
                <i class="ni ni-ui-04"></i>
                <span class="nav-link-text">Components</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html"
                target="_blank"
              >
                <i class="ni ni-chart-pie-35"></i>
                <span class="nav-link-text">Plugins</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
//import $ from "jquery";

export default {
  name: "SideNav",
  data() {
    return {
      diseasePdsaPanelToggle: true, //means show is available
      symptomPdsaPanelToggle: true, //means show is unavailable
    };
  },
  computed: {
    diseaseBoldArrow() {
      return this.diseasePdsaPanelToggle ? "ni-bold-down" : "ni-bold-right";
    },
    symptomBoldArrow() {
      return this.symptomPdsaPanelToggle ? "ni-bold-down" : "ni-bold-right";
    },
  },
  methods: {
    toggleDiseaseBoldArrow() {

        if (this.diseasePdsaPanelToggle == true) {
          this.diseasePdsaPanelToggle = false;
        } else {
          this.diseasePdsaPanelToggle = true;
        }
        //alert(event.target.tagName);
        this.symptomPdsaPanelToggle = false;
        console.log(this.diseasePdsaPanelToggle);
    },
    toggleSymptomBoldArrow() {
      if (this.symptomPdsaPanelToggle == true) {
        this.symptomPdsaPanelToggle = false;
      } else {
        this.symptomPdsaPanelToggle = true;
      }
        this.diseasePdsaPanelToggle = false;
      console.log(this.symptomPdsaPanelToggle);
    },
  },
  mounted() {},
};

// $(document).ready(function () {
//   // Add the down glyph to all elements
//   // that have the class 'pdsa-panel-toggle'
//   $(".pdsa-panel-toggle").addClass("ni ni-bold-down");

//   var list = $(".show");
//   for (var i = 0; i < list.length; i++) {
//     $($("a[href='#" + $(list[i]).attr("id") + "']"))
//       .next()
//       .removeClass("ni ni-bold-right")
//       .addClass("ni ni-bold-down");
//   }

//   function toggleGlyphs(ctl) {
//     if ($(ctl).hasClass("ni ni-bold-right")) {
//       $(ctl).removeClass("ni ni-bold-right");
//       $(ctl).addClass("ni ni-bold-down");
//     } else {
//       $(ctl).removeClass("ni ni-bold-down");
//       $(ctl).addClass("ni ni-bold-right");
//     }
//   }

//   $(".pdsa-panel-toggle").click(function () {
//     // Retrieve the previous anchor tag's 'href'
//     // attribute so you can toggle it.
//     $($(this).prev().attr("href")).collapse("toggle");
//     // Change the glyphs
//     toggleGlyphs($(this));
//   });

//   $("a[data-toggle='collapse']").click(function () {
//     // Change the glyphs
//     toggleGlyphs($(this).next());
//   });
// });
</script>

<style scoped>
.card > .card-header > .card-title > a {
  text-decoration: none;
}
.pdsa-panel-toggle {
  float: right;
  cursor: pointer;
}

.card {
  margin-bottom: 0px;
}
</style>
      