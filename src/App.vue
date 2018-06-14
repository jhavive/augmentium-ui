<template>
  <div v-bind:id="($route.path==='/')?'app':'app-inside'">
    <!-- <img src="./assets/logo.png"> -->
    <desktopNavBar class="desktop"/>
    <mobileNav class="mobile"/>
    <router-view/>
  </div>
</template>

<script>
import desktopNavBar from './components/NavBar/desktop'
import mobileNav from './components/NavBar/mobile'
export default {
  name: 'App',
  components: {
    'desktopNavBar': desktopNavBar,
    'mobileNav': mobileNav
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Raleway');

#app-inside{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  margin:0px;
  background:none;
  background: url('assets/images/bg1.jpg');
  background-repeat: no-repeat;
    background-attachment: fixed;
  width:100%;
  height:100%;
  overflow: scroll;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  margin:0px;
  background:none;
  background: url('assets/images/bg1.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  width:100%;
  height:100%;
  overflow: scroll;
}
#app:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  /* background: rgba(0,0,0,.4); */
  background-color: black;
  background:linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.9)),url(assets/images/topography.png);
  /* background-color: black; */
  opacity: .6;
  background-blend-mode:difference
}
#app-inside:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background-color: black;
  opacity: .4;
}
@media only screen and (max-width: 1024px) {
  .desktop {
    display:none !important;
  }
}
@media only screen and (min-width: 1024px) {
  .mobile {
    display:none !important;
  }
}
</style>
