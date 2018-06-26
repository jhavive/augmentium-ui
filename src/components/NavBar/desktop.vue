<template>
    <div v-if="$route.path!=='/'" id="navigation">
        <menuItem />
        <div class="rightMenuItem"><img src="../../assets/images/logo.png" id="logoimgMenuDesktop"/></div>
    </div>
</template>

<script>
import menuItem from './menu-items'
export default {
  name: 'desktopNavs',
  components: {
    'menuItem': menuItem
  },
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
.rightMenuItem {
  width: 80px;
  padding: 20px;
  text-align: right;
}
#logoimgMenuDesktop {
  width: 100%;
  height: 100%;
}
</style>
