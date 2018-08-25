<template>
    <div class="body">
    <div class="bg"></div>
    <div class="content">
        <!-- <div v-bind:class="(!secondTime)?'logo':'logostatic'"> -->
            <!-- <div class="upper-part-logo"></div> -->
            <!-- <div id="rect" v-bind:class="(!secondTime)?'moveUp':''" class=""></div>
            <div id="logo-border" v-bind:class="(!secondTime)?'moveDownWithDelay':''" ><img src="../../assets/images/logo.png" id="logoimg"  v-bind:class="(!secondTime)?'fadeIn':''" /></div>
            <h1 id="name"  v-bind:class="(!secondTime)?'fadeIn':''" >AUGMENTIUM</h1>
            <div id="advisor"  v-bind:class="(!secondTime)?'moveUpWithDelay':''" ><h3 id="" v-bind:class="(!secondTime)?'fadeIn':''" >Advisors</h3></div>
            <div id="rect"  v-bind:class="(!secondTime)?'moveDown':''"></div> -->
            <svg id="svg1" style="opacity: 0;">
                <g id="logo">
                    <rect width="80%" id="top-bar" height="1.5%" x="10%"  y="35%" style="fill:rgb(255,255,255);" />
                    <rect width="2%" id="left-top-bar" height="17%" x="10%" style="fill:rgb(255,255,255);" />
                    <rect width="2%" id="right-top-bar"  height="17%" x="90%" style="fill:rgb(255,255,255);" />

                    <!-- <defs>
                        <clipPath id="circleView">
                            <circle cx="20%" cy="20%" r="50%" fill="#FFFFFF" />            
                        </clipPath>
                    </defs> -->
                    <g id="content">
                        <image width="25%" id="img" height="25%" x="36%" y="8%" xlink:href="../../assets/images/logo.png" />
                    
                        <text y="40%" fill="WHITE"  id="logo-text">AUGMENTIUM</text>
                        <!-- <text y="40%" fill="WHITE" style="font-weight:800;font-size:5.5vw">AUGMENTIUM</text> -->
                        
                        <text x="28%" y="57%" id="logo-sub-text" fill="WHITE">ADVISORS</text>
                    </g>

                    <rect width="80%"  id="bottom-bar"  height="1.5%" x="10%"  y="36%"  style="fill:rgb(255,255,255);" />
                    <!-- y="70%" -->
                    <rect width="2%" id="left-bottom-bar" height="17%" x="10%" y="65%" style="fill:rgb(255,255,255);" />
                    <rect width="2%" id="right-bottom-bar" height="17%" x="90%" y="65%" style="fill:rgb(255,255,255);" />
                </g>
                <animate 
                xlink:href="#top-bar"
                attributeName="opacity" 
                from="0"
                to="1" 
                dur="1s"
                fill="freeze" 
                begin="0s"
                id="fadeInTop" />

                <animate 
                xlink:href="#bottom-bar"
                attributeName="opacity" 
                from="0"
                to="1" 
                dur="1s"
                fill="freeze"  
                begin="0s"
                id="fadeInBottom" />

                <animate 
                xlink:href="#top-bar"
                attributeName="y" 
                from="35%"
                to="10%" 
                dur="2s"
                begin="fadeInBottom.end + 1s"
                fill="freeze" 
                id="rect-anim" />

                <animate 
                xlink:href="#bottom-bar"
                attributeName="y" 
                from="36%"
                to="62.5%" 
                dur="2s"
                begin="fadeInBottom.end + 1s"
                fill="freeze" 
                id="rect-anim" />

                <animate 
                xlink:href="#right-top-bar"
                attributeName="y" 
                from="0%"
                to="10%" 
                dur="2s"
                begin="fadeInBottom.end + 1s"
                fill="freeze" 
                id="right-top-bar-anim" />

                <animate 
                xlink:href="#left-top-bar"
                attributeName="y" 
                from="0%"
                to="10%" 
                dur="2s"
                begin="fadeInBottom.end + 1s"
                fill="freeze" 
                id="left-top-bar-anim" />

                <animate 
                xlink:href="#right-bottom-bar"
                attributeName="y" 
                from="65%"
                to="47%" 
                dur="2s"
                begin="fadeInBottom.end + 1s"
                fill="freeze" 
                id="right-bottom-bar-anim" />

                <animate 
                xlink:href="#left-bottom-bar"
                attributeName="y" 
                from="65%"
                to="47%" 
                dur="2s"
                begin="fadeInBottom.end + 1s"
                fill="freeze" 
                id="left-bottom-bar-anim" />

                <animate 
                    xlink:href="#content"
                    attributeName="opacity" 
                    from="0"
                    to="0" 
                    dur="6s"
                    begin="0s"
                    id="centralBlank" />

                <animate 
                    xlink:href="#content"
                    attributeName="opacity" 
                    from="0"
                    to="1" 
                    dur="2s"
                    begin="centralBlank.end"
                    fill="freeze" 
                    id="centralFadeIn" />

                <!-- <animate 
                    xlink:href="#img"
                    attributeName="opacity" 
                    from="0"
                    to="1" 
                    dur="2s"
                    begin="left-bottom-bar-anim.end + 1s"
                    fill="freeze" 
                    id="centralFadeIn" />

                <animate 
                    xlink:href="#logo-text"
                    attributeName="opacity" 
                    from="0"
                    to="1" 
                    dur="2s"
                    begin="left-bottom-bar-anim.end + 1s"
                    fill="freeze" 
                    id="centralFadeIn" />
            
                <animate 
                    xlink:href="#logo-sub-text"
                    attributeName="opacity" 
                    from="0"
                    to="1" 
                    dur="2s"
                    begin="left-bottom-bar-anim.end + 1s"
                    fill="freeze" 
                    id="centralFadeIn" /> -->
            

            </svg>
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
    window.addEventListener("load", function(event) {
        document.getElementById('svg1').id = 'svg'
    });
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

    @keyframes fadein { 
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadein { 
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadein { 
        0% {
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
        margin: .1vw;
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
        top:15%;
    }
    @media only screen and (max-width: 750px) {
        @keyframes moveUp {
            0%{
                transform:translateY(52px)
            }
            50% {
                transform:translateY(52px)
            }
            100% {
                transform:translateY(0px)
            }
        }

        @keyframes moveDown {
            0% {
                transform:translateY(-52px)
            }
            50% {
                transform:translateY(-52px)
            }
            100% {
                transform:translateY(0px)
            }
        }
        #logoimg{
            margin-top:5px;
            width:30%;
        }
        #advisor{
            border-left: .5vw solid white;
            border-right: .5vw solid white;
            margin: 0px auto;
            width: 20vw;
            font-size: 3vw;
            padding: 1vw 0px;
            color: white;
        }
        #svg{
            width:40vw;
            height:60vw;
            -webkit-animation-name: fadein;
            -webkit-animation-duration: 1.25s;
            -webkit-animation-iteration-count: 1;
            animation-name: fadein;
            animation-duration: 1.25s;
            animation-iteration-count: 1;
            -moz-animation-name: fadein;
            -moz-animation-duration: 1.25s;
            -moz-animation-iteration-count: 1;
            animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
        }
        #img{
            /* opacity: 0; */
        }
        #logo-text {
            /* opacity: 0; */
            font-size: 5.7vw;
            font-weight:800;
        } 
        #logo-sub-text {
            /* opacity: 0; */
            font-weight:600;
            font-size:3.5vw;
        }
    }
    @media only screen and (min-width: 750px) {
        @keyframes moveUp {
            0%{
                transform:translateY(120px)
            }
            50% {
                transform:translateY(120px)
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
        
        #svg{
            width:20vw;
            height:30vw;
            opacity: 0;
            -webkit-animation-name: fadein;
            -webkit-animation-duration: 1.25s;
            -webkit-animation-iteration-count: 1;
            animation-name: fadein;
            animation-duration: 1.25s;
            animation-iteration-count: 1;
            -moz-animation-name: fadein;
            -moz-animation-duration: 1.25s;
            -moz-animation-iteration-count: 1;
            animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
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
            font-size: 3vw;
            padding: 1vw 0px;            
            color: white;
        }
        #img{
            /* opacity: 0; */
        }
        #logo-text {
            /* opacity: 0; */
            font-weight:800;
            font-size:2.8vw;
        }
        #logo-sub-text {
            /* opacity: 0; */
            font-weight:600;
            font-size:1.7vw;
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
    .moveUpWithDelay {
        animation: moveUp;
        animation-duration: 6s;

    }
    .moveDownWithDelay {
        animation: moveDown;
        animation-duration: 6s;
        /* animation-delay: 3s; */
    }
    .fadeIn {
        animation: fadeinWithDelay 10s;
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
        bottom: 150px;
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
