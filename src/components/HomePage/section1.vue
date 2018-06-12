<template>
    <div id="section1">
        <div id="bg"></div>
        <div id="menu-container"></div>
        <div class='circle-container'>
            <router-link to="/" exact class='center'><div><img class="menu-image" src="../../assets/images/Home.png"/><br/>Home</div></router-link>
            <router-link to='about' class='deg0'><div><img class="menu-image" src="../../assets/images/About.png"/><br/>About</div></router-link>
            <router-link to='approach' class='deg45'><div><img class="menu-image" src="../../assets/images/Approach.png"/><br/>Approach</div></router-link>
            <router-link to='team' class='deg135'><div><img class="menu-image" src="../../assets/images/Team.png"/><br/>Team</div></router-link>
            <router-link to='invetment' class='deg180'><div><img class="menu-image" src="../../assets/images/Investments.png"/><br/>Investments</div></router-link>
            <router-link to='news' class='deg225'><div><img class="menu-image" src="../../assets/images/News.png"/><br/>News</div></router-link>
            <router-link to='contact' class='deg315'><div><img class="menu-image" src="../../assets/images/Contact_Us.png"/><br/>Contact Us</div></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'section1'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #section1{
        width:100%;
        height:100%;
        position:relative;
    }
    /* #bg{
        width:100%;
        height:100%;
        background: black;
        opacity: 0.4;
    } */

    #bg{
        width:100%;
        height: 100%;
    }
    @media only screen and (max-width: 750px) {
        #menu-container{
            position:absolute;
            width: 75vw;
            height: 75vw;
            top: 46%;
            transform: translateY(-46%);
            left:0;
            right:0;
            background: white;
            border-radius:50%;
            margin:0px auto;
            opacity: 0.8;
        }.circle-container {
            position:absolute;
            top: 43%;
            transform: translateY(-43%);
            left:0;
            right:0;
            margin:0px auto;
        }.circle-container a {
            display: block;
            overflow: hidden;
            position: absolute;
            top: 50%;
            left:0;
            right:0;
            margin: 0px auto;
            text-decoration: none;
            width: 13%; height: auto;
            font-size: .6em;
            word-wrap: break-word;
            color: #000000;
            /* color: #41A5FF */
        }
        .menu-image {
            width:100%;
            filter: hue-rotate(359deg) saturate(67%) brightness(41%);
        }
        .deg0 { transform: translate(185%); } /* 12em = half the width of the wrapper */
        .deg45 { transform: rotate(55deg) translate(185%) rotate(-55deg); }
        .deg135 { transform: rotate(125deg) translate(218500%) rotate(-125deg); }
        .deg180 { transform: translate(-185%); }
        .deg225 { transform: rotate(235deg) translate(185%) rotate(-235deg); }
        .deg315 { transform: rotate(305deg) translate(185%) rotate(-305deg); }
    }
    @media only screen and (min-width: 750px) {
        #menu-container{
            position:absolute;
            width: 42vw;
            height: 42vw;
            top: 50%;
            transform: translateY(-50%);
            left:0;
            right:0;
            background: white;
            border-radius:50%;
            margin:0px auto;
            opacity: 0.8;
        }.circle-container {
            position:absolute;
            top: 43%;
            transform: translateY(-43%);
            left:0;
            right:0;
            margin:0px auto;
        }.circle-container a {
            display: block;
            overflow: hidden;
            position: absolute;
            top: 50%;
            left:0;
            right:0;
            margin: 0px auto;
            text-decoration: none;
            width: 8%; height: auto;
            font-size: .8em;
            color: #000000;
            /* color: #41A5FF; */
        }
        .menu-image {
            filter: hue-rotate(359deg) saturate(67%) brightness(41%);
            width:90%;
        }
        .deg0 { transform: translate(185%); } /* 12em = half the width of the wrapper */
        .deg45 { transform: rotate(55deg) translate(185%) rotate(-55deg); }
        .deg135 { transform: rotate(125deg) translate(185%) rotate(-125deg); }
        .deg180 { transform: translate(-185%); }
        .deg225 { transform: rotate(235deg) translate(185%) rotate(-235deg); }
        .deg315 { transform: rotate(305deg) translate(185%) rotate(-305deg); }
    }
    /* this is just for showing the angle on hover */
    .circle-container a:not(.center):before {
        position: absolute;
        width: 4em;
        color: white;
        opacity: 0;
        background: rgba(0,0,0,.5);
        font: 1.25em/3.45 Courier, monospace;
        letter-spacing: 2px;
        text-decoration: none;
        text-indent: -2em;
        text-shadow: 0 0 .1em deeppink;
        transition: .7s; /* only works in Firefox */
        content: attr(class)'°';
    }
</style>
