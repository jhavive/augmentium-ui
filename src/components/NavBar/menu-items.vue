<template>
    <ul class="navlist">
        <li v-bind:class="[$route.path==='/' ? 'actives' : '', 'nav-items']">
            <!-- <router-link to="/" exact><div><img class="nav-image" src="../../assets/images/Home.png"/><br/>Home</div></router-link> -->
            <a href="/"><div><img class="nav-image" src="../../assets/images/Home.png"/><br/>Home</div></a>
        </li>
        <li v-bind:class="[$route.path==='/about' ? 'actives' : '', 'nav-items']" v-on:click="(onclick)?onclick:null">
            <!-- <router-link to='about'><div><img class="nav-image" src="../../assets/images/About.png"/><br/>About</div></router-link> -->
            <a href='/#/about'><div><img class="nav-image" src="../../assets/images/About.png"/><br/>About</div></a>
        </li>
        <li v-bind:class="[$route.path==='/approach' ? 'actives' : '', 'nav-items']">
            <!-- <router-link to='approach'><div><img class="nav-image" src="../../assets/images/Approach.png"/><br/>Approach</div></router-link> -->
            <a href='/#/approach'><div><img class="nav-image" src="../../assets/images/Approach.png"/><br/>Approach</div></a>
        </li>
        <li v-bind:class="[$route.path==='/team' ? 'actives' : '', 'nav-items']">
            <!-- <router-link to='team'><div><img class="nav-image" src="../../assets/images/Team.png"/><br/>Team</div></router-link> -->
            <a href='/#/team'><div><img class="nav-image" src="../../assets/images/Team.png"/><br/>Team</div></a>
            <!-- <router-link :to="'team'" replace><img class="nav-image" src="./assets/images/Team.png"/></router-link> -->
        </li>
        <li v-bind:class="[$route.path==='/' ? 'actives' : '', 'nav-items']">
            <!-- <router-link to='invetment'><div><img class="nav-image" src="../../assets/images/Investments.png"/><br/>Clients</div></router-link> -->
            <a href='/#/invetment'><div><img class="nav-image" src="../../assets/images/Investments.png"/><br/>Clients</div></a>
        </li>
        <li v-bind:class="[$route.path==='/news' ? 'actives' : '', 'nav-items']">
            <!-- <router-link to='news'><div><img class="nav-image" src="../../assets/images/News.png"/><br/>News</div></router-link> -->
            <a href='/#/news'><div><img class="nav-image" src="../../assets/images/News.png"/><br/>News</div></a>
        </li>
        <li v-bind:class="[$route.path==='/contact' ? 'actives' : '', 'nav-items']">
            <!-- <router-link to='contact'><div><img class="nav-image" src="../../assets/images/Contact_Us.png"/><br/>Contact Us</div></router-link> -->
            <a href='/#/contact'><div><img class="nav-image" src="../../assets/images/Contact_Us.png"/><br/>Contact Us</div></a>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'menuItem',
  props:['onclick'],
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

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
.navlist{
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  /* height:100%; */
  bottom: 0px;
  width:90%;
}
.nav-items {
    float: left;
    /* height:100%; */
    /* height: 80px; */
    padding:9px 20px;
    margin:0px 10px;
    font-size: .8em;
}
.nav-image {
  /* width:100%; */
  height: 60px;
  filter : hue-rotate(359deg) saturate(67%) brightness(41%);
  /* -webkit-filter : hue-rotate(180deg); */
    /* filter : hue-rotate(359deg) saturate(67%) brightness(41%);; */
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
.rightMenuItem {
  width: 80px;
  padding: 20px;
  text-align: right;
}
#logoimgMenu {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 700px) {
    .nav-items{
        padding: 15px 7px;
    }
  .nav-image{
    height: 40px;
  }
}
</style>
