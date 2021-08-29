<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Navbar, Sidebar, Footer },
  data: () => ({
    //
  }),
};
</script>



<style>
/* Scroll Bar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  background-color: #00063a;
  border-radius: 100px;
}
/* Container */
.container {
  max-width: 1250px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding: 12px !important;
}

/*Image */
img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* Button */
.v-btn {
  text-transform: capitalize !important;
  font-weight: 400 !important;
  font-size: 12px !important;
}

/* Input Fields */
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot { border-radius: 0 !important; }
.v-text-field input, .v-input .v-label {
  font-size: 13px !important;
  color: rgb(0 0 0 / 80%) !important;
  font-weight: 300 !important;
  letter-spacing: 1px !important;
}
.v-input input { font-size: 12px !important; }
.v-input .v-label { 
  line-height: 1 !important;
  font-size: small !important;
}
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #00063a !important; }
.v-text-field--outlined.v-input--has-state fieldset { border: 1px solid #ff2059 !important; }
.v-input .v-icon.v-icon { font-size: 18px !important; }
.v-text-field--outlined.v-input--dense .v-label { top: 14px !important; }

/* Courses */
.courses, .reviews {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;
}
/* Teams */
.teams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 20px;
}

@media (max-width: 1060px) {
  .courses, .reviews { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }
}
@media (max-width: 860px) {
  .courses, .teams, .reviews { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 600px) {
  .courses, .teams, .reviews { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>
