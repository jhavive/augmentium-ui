<template>
  <div v-bind:id="($route.path==='/')?'app':'app-inside'">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="content"/>
    <div v-if="$route.path!=='/'">
      <desktopNavBar class="desktop"/>
      <mobileNav class="mobile"/>
    </div>
    
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

.content {
  z-index: 50;
  overflow: scroll;
}

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
  position: fixed;
}
#app:before {
  content: "";
  position: fixed;
  left: 0; right: 0;
  top: 0; bottom: 0;
  /* background: rgba(0,0,0,.4); */
  background-color: black;
  background:linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.9)),url(assets/images/topography.png);
  /* background-color: black; */
  opacity: .6;
  background-blend-mode:difference;

   -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
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
    z-index:100;
  }
}
@media only screen and (min-width: 1024px) {
  .mobile {
    display:none !important;
    z-index:100;
  }
}


@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .6; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .6; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .6; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .6; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .6; }
}
</style>
