<template>
  <div style="display:fixed;height:100%;width:100%;">

    <div v-if="$route.path!=='/'" id="navigation"></div>

    <div style="display: flex;flex-direction: row;">
      <div class="leftMenuItem"><img src="../../assets/images/logo.png" id="logoimgMenu"/><br/>Augmentium<br/>Advisors</div>
      <div class="centerMenuItem"/>
      <div class="rightMenuItem">
        <div id="hamburger" class="container" v-on:click="toggle">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    </div>
    <div class="sidebar" v-if="sidebarToggle" 
        v-on:click="toggle">
          <ul class="navlist">
            <li id="menu" v-for="c in menuItems" v-bind:key="c">
              <a :href="c.href"><div id="menu-row">
                <img id="menu-logo" :src="getImagePath(c.imgUrl)"/>
                <h5 id="menu-name">{{c.name}}</h5>
              </div></a>
            </li>
          </ul>
    </div>
  </div>
    
</template>

<script>
/* eslint-disable */
import menuItem from './menu-items';
export default {
  name: 'desktopNavs',
  components: {
	  'menuItem':menuItem
  },
  data: function () {
    return {
      sidebarToggle: false,
      menuItems: [
        // ../../assets/images/
        {id:"1", name: "Home", imgUrl:"Home.png", href: "/"},
        {id:"2", name: "About",  imgUrl:"About.png", href: "/#/about"},
        {id:"3", name: "Approach",  imgUrl:"Approach.png", href: "/#/approach"},
        {id:"4", name: "Team",  imgUrl:"Team.png", href: "/#/team"},
        {id:"5", name: "Clients",  imgUrl:"Investments.png", href: "/#/invetment"},
        {id:"6", name: "News",  imgUrl:"News.png", href: "/#/news"},
        {id:"7", name: "Contact Us",  imgUrl:"Contact_Us.png", href: "/#/contact"},
      ]
    }
  },
  methods: {
    toggle: function (event) {
      console.log(event.currentTarget)
      this.sidebarToggle = !this.sidebarToggle;
      document.getElementById('hamburger').classList.toggle("change");
    },
    getImagePath(item) {
      return require('../../assets/images/'+item);
    }
  }
}
</script>

<style scoped>
/* eslint-disable */
a{
  text-decoration: none;
  color: #000000;
}
#navigation{
  position: fixed;
  top:0px;
  height:90px;
  width: 100%;
  background: #F5F5F5;
  box-shadow: 2px 10px 50px 5px grey;
  z-index: 0;
  /* overflow: scroll; */
  display: flex;
  flex-direction: row;
}
.nav-items {
    float: left;
    padding:15px 20px;
    margin:0px 10px;
    font-size: .8em;
}
.nav-image {
  height: 60px;
    filter : hue-rotate(359deg) saturate(67%) brightness(41%);;
}
.nav-items a {
    display: block;
    color: black;
    text-align: center;
    text-decoration: none;
}
.actives{
    background: #d8d8d8;
    border-bottom: 4px solid #4FACFF;
}
.nav-items:hover {
    background-color: #d8d8d8;
    border-bottom: 4px solid #d8d8d8;
}
.leftMenuItem {
  width: 10%;
  padding: 20px;
  text-align: center;
  font-size: 10px;
  height:100px;
  width:100px;
  z-index: 100;
}
.centerMenuItem {
	width: 80%;
}
.rightMenuItem {
  width: 80px;
  padding: 20px;
  text-align: right;
  z-index: 100;
  /* overflow-y: scroll; */
}


.container {
    display: inline-block;
    cursor: pointer;
}

.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}

@media only screen and (max-width: 700px) {
  #logoimgMenu {
    width: 40px;
    height: 30%;
  }
  .nav-image{
    height: 30px;
  }
  .sidebar {
  	position: absolute;
  	top: 90px;
    right: 0px;
    bottom: 0px;
    background: #F5F5F5;
    /* height: 100%; */
    width: 200px;
    box-shadow: 0px 38px 50px 5px grey;
    overflow-y: scroll;
  }
  #menu-logo {
    width: 35px;
    height: 35px;
    filter : hue-rotate(359deg) saturate(67%) brightness(41%);
  }
  .navlist{
    list-style-type: none;
    margin: 10;
    padding: 0;
    /* overflow: hidden; */
    /* height:100%; */
    bottom: 0px;
    overflow-y: scroll;
    width:90%;
  }
  #menu-row {
    display: flex;
    flex-direction: row;
    margin: 5px 20px 10px;
  }
  #menu-name {
    margin: 7px;
    font-weight: 100;
  }
}
@media only screen and (min-width: 701px) and (max-width: 1025px) {
  #logoimgMenu {
    width: 70px;
    height: 50%;
  }
  .sidebar {
  	position: absolute;
  	top: 90px;
    right: 0px;
    bottom: 0px;
    background: #F5F5F5;
    /* height: 100%; */
    width: 250px;
    box-shadow: 0px 38px 50px 5px grey;
    overflow-y: scroll;
  }
  #menu-logo {
    width: 35px;
    height: 35px;
    filter : hue-rotate(359deg) saturate(67%) brightness(41%);
  }
  .navlist{
    list-style-type: none;
    margin: 10;
    padding: 0;
    /* overflow: hidden; */
    /* height:100%; */
    bottom: 0px;
    overflow-y: scroll;
    width:90%;
  }
  #menu-row {
    display: flex;
    flex-direction: row;
    margin: 5px 20px 10px;
  }
  #menu-name {
    margin: 7px;
    font-weight: 100;
  }
}
</style>
