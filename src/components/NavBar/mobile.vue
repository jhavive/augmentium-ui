<template>
<div v-if="$route.path!=='/'" id="navigation">
<div class="leftMenuItem"><img src="../../assets/images/logo.png" id="logoimgMenu"/><br/>Augmentium<br/>Advisors</div>
<div class="centerMenuItem"/>
<div class="rightMenuItem" v-on:click="toggle">
<div class="container">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
</div>
</div>

<div class="sidebar" v-if="sidebarToggle">
<menuItem />
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
		sidebarToggle: false
    }
  },
  methods: {
	toggle: function (event) {
	  console.log(event.target.className)
	  this.sidebarToggle = !this.sidebarToggle;
	  event.target.classList.toggle("change");
	}
  }
}
</script>

<style scoped>
/* eslint-disable */
#navigation{
  position: fixed;
  top:0px;
  height:100px;
  width: 100%;
  background: #F5F5F5;
  box-shadow: 2px 10px 50px 5px grey;
  z-index: 1000;
  overflow: scroll;
  display: flex;
  flex-direction: row;
}
/* .navlist{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height:100%;
  overflow-x: scroll;
  width:90%;
} */
.nav-items {
    float: left;
    /* height:100%; */
    /* height: 80px; */
    padding:15px 20px;
    margin:0px 10px;
    font-size: .8em;
}
.nav-image {
  /* width:100%; */
  height: 60px;
  /* -webkit-filter : hue-rotate(180deg); */
    filter : hue-rotate(359deg) saturate(67%) brightness(41%);;
}
.nav-items a {
    display: block;
    color: black;
    text-align: center;
    /* padding: 16px; */
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
  font-size: 10px
}
.centerMenuItem {
	width: 80%;
}
.rightMenuItem {
  width: 80px;
  padding: 20px;
  text-align: right;
}
#logoimgMenu {
  width: 45px;
  height: 50%;
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
.sidebar {
  	position: fixed;
  	top: 100px;
    right: 0px;
    bottom: 0px;
    background: #F5F5F5;
    /* height: 100%; */
    width: 125px;
    box-shadow: 0px 38px 50px 5px grey;
    overflow-y: scroll;
}
</style>
