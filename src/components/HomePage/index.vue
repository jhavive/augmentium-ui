<template>
    <div class="body">
    <div class="bg"></div>
    <div class="content">
        <div v-bind:class="(!secondTime)?'logo':'logostatic'">
            <!-- <div class="upper-part-logo"></div> -->
            <div class="logo-border upper-part-logo"><img src="../../assets/images/logo.png" id="logoimg"/></div>
            <h1 class="">AUGMENTIUM</h1>
            <h3 id="advisor">Advisors</h3>
            <!-- <div class="lower-part-logo"></div> -->
            <div class="logo-border lower-part-logo"></div>
        </div>
    </div>
    <div class="scroll-down">
        <p class="scroll-down-p">Scroll Down</p>
        <div id="arrow">
            <div id="upper"></div>
            <div id="lower"></div>
        </div>
    </div>
    <section1></section1>
</div>
</template>

<script>
import section1 from './section1'
export default {
  name: 'HomePage',
  components: {
    'section1': section1
  },
  created: function () {
    localStorage.setItem('secondTime', true)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // eslint-disable-next-line
      secondTime: (localStorage.secondTime)?true:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    h1, h2 {
        font-weight: bolder;
        font-size: 4vw;
        color:white;
        margin: 0px
    }
    h3{
        margin: 0px;
        color:white;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .body{
        position:relative;
        width:100%;
        height: 100%;
        /* background:; */
    }
    .bg{
        width:100%;
        height: 100%;
        /* background-color: black;
        background:linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)),url(./topography.png);
        opacity: .6;
        background-blend-mode:difference */
    }
    /* .bg:before {
        content: "";
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        background: rgba(0,0,0,.4);
    } */
    .content{
        width:100%;
        position: absolute;
        top:35%;
    }
    .logostatic{
        width:30%;
        margin: 0px auto;
        text-align: center;
        -webkit-animation: fadein 0s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 0s; /* Firefox < 16 */
        -ms-animation: fadein 0s; /* Internet Explorer */
        -o-animation: fadein 0s; /* Opera < 12.1 */
        animation: fadein 0s;
    }
    .logo{
        width:30%;
        /* width:auto; */
        margin: 0px auto;
        text-align: center;
        -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 4s; /* Firefox < 16 */
        -ms-animation: fadein 4s; /* Internet Explorer */
        -o-animation: fadein 4s; /* Opera < 12.1 */
        animation: fadein 4s;
    }
    #logoimg{
        margin-top:10px;
        width:30%;
    }
    #advisor{
        border-left: .5vw solid white;
        border-right: .5vw solid white;
        margin: 0px auto;
        width: 20vw;
    }
    .logo-border {
        margin: 0px auto;
        border-left: .5vw solid white;
        border-right: .5vw solid white;
        width: 20vw;
    }
    .upper-part-logo {
        height: 5vw;
        border-top: 0.5vw solid #fff;
        text-align: center;
    }
    .lower-part-logo {
        height: 2.8vw;
        border-bottom: 0.5vw solid #fff;
    }

    .scroll-down {
        position: absolute;
        bottom: 20px;
        text-align: center;
        width: 100%;
    }
    .scroll-down-p {
        margin:0px;
        color:white;
    }
    .arrow{
        width: 10px;
        margin: 0px;
        font-size: 48px;
        /* transform: rotate(90deg); */
    }

    #arrow{
        width: 10px;
        margin: 0px auto;
        transform: rotate(90deg);
    }
    #upper{
        height:5px;
        width:25px;
        background: white;
        transform: rotate(45deg);
    }
    #lower{
        margin-top: 11px;
        height:5px;
        width:21px;
        background: white;
        transform: rotate(-45deg);
    }
</style>
