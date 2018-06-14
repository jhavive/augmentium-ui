<template>
    <div class="body">
    <div class="bg"></div>
    <div class="content">
        <!-- <div v-bind:class="(!secondTime)?'logo':'logostatic'"> -->
            <!-- <div class="upper-part-logo"></div> -->
            <div id="rect" v-bind:class="(!secondTime)?'moveUp':''" class=""></div>
            <div id="logo-border" v-bind:class="(!secondTime)?'moveDown':''" ><img src="../../assets/images/logo.png" id="logoimg"  v-bind:class="(!secondTime)?'fadeIn':''" /></div>
            <h1 id="name"  v-bind:class="(!secondTime)?'fadeIn':''" >AUGMENTIUM</h1>
            <div id="advisor"  v-bind:class="(!secondTime)?'moveUp':''" ><h3 v-bind:class="(!secondTime)?'fadeIn':''" >Advisors</h3></div>
            <div id="rect"  v-bind:class="(!secondTime)?'moveDown':''"></div>
        <!-- </div> -->
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

    @keyframes moveUp {
        0%{
            transform:translateY(100px)
        }
        50% {
            transform:translateY(100px)
        }
        100% {
            transform:translateY(0px)
        }
    }

    @keyframes moveDown {
        0% {
            transform:translateY(-100px)
        }
        50% {
            transform:translateY(-100px)
        }
        100% {
            transform:translateY(0px)
        }
    }

    @keyframes fadeinWithDelay { 
        0% {
            opacity: 0;
        }
        50%{
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    h1, h2 {
        font-weight: bolder;
        font-size: 4vw;
        color:white;
        margin: 0px
    }
    h3{
        margin: 7px;
        color:white;
        font-size: 2rem;
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
    }
    .bg{
        width:100%;
        height: 100%;
    }
    .content{
        width:100%;
        position: absolute;
        top:35%;
    }
    @media only screen and (max-width: 750px) {
        #logoimg{
            margin-top:5px;
            width:30%;
        }
        #advisor{
            border-left: .5vw solid white;
            border-right: .5vw solid white;
            margin: 0px auto;
            width: 20vw;
            font-size: 2vw;
            padding: 10px 0px;
        }
    }
    @media only screen and (min-width: 750px) {
        
        #logoimg{
            margin-top:10px;
            width:30%;
                  
        }
        #advisor{
            border-left: .5vw solid white;
            border-right: .5vw solid white;
            margin: 0px auto;
            width: 20vw;
            font-size: 3vw;
            padding: 10px 0px;
        }
    }
    #rect {
        margin: 0px auto;
        width: 21%;
        height: .5vw;
        background: white;
    }
    .moveUp {
        animation: moveUp;
        animation-duration: 3s;
    }
    .moveDown {
        animation: moveDown;
        animation-duration: 3s;
    }
    .fadeIn {
        animation: fadeinWithDelay 6s;
    }
    #logo-border {
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
        height: 2.4vw;
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
