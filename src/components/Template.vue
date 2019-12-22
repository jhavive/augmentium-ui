<template>
    <div class="body">
    <div class="bg"></div>
    <div class="content">
        <div class="lower-container">
            <div class="lower-container-content">
                <div class="header-container">
                    <img id="header-logo" :src="getImagePath(imagePath)">
                    <h2 class="lower-container-menu-header">{{heading}}</h2>
                </div>
                <div>
                    <ul style="list-style-type: none;padding:0px;" v-on:click="selectItem">
                        <li v-for="item in items" v-bind:key="item" v-bind:class="[selectedItem===item ? 'active' : '', 'lower-container-menu']">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="upper-content">
            <div class="upper-container-content" v-for="c in (selectedItem)?content[selectedItem]:content" v-bind:key="c">
                <div v-if="c.length>0">
                    <div v-for="acc_row in c" v-bind:key="acc_row">
                        <div v-if="acc_row.accordian_header" v-on:click="toggle($event)" class="accordian-row">{{acc_row.accordian_header}}</div>
                        <div>
                            <div v-for="acc_body in acc_row.accordian_body" v-bind:key="acc_body">
                                <div v-if="acc_body.heading"><h1>{{acc_body.heading}}</h1></div>
                                <div v-if="acc_body.imagePath"><img :src="getImagePath(acc_body.imagePath)"></div>
                                <div v-if="acc_body.subHeading" class="upper-container-content-subHeading"><h2>{{acc_body.subHeading}}</h2></div>
                                <div v-if="acc_body.subSubHeading" class="upper-container-content-subSubHeading">{{acc_body.subSubHeading}}</div>
                                <div v-if="acc_body.subSubContent" class="upper-container-content-subSubContent">{{acc_body.subSubContent}}</div>
                                <p v-if="acc_body.content" class="upper-container-content-content">{{acc_body.content}}</p>
                                <p v-if="acc_body.subContent" class="upper-container-content-subContent">{{acc_body.subContent}}</p>
                                <ul v-if="acc_body.list" class="upper-container-content-content-list">
                                    <li v-for="i in acc_body.list" v-bind:key="i">{{i}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="!c.accordian">
                    <div v-if="c.heading"><h1>{{c.heading}}</h1></div>
                    <div v-if="c.imagePath"><img :src="getImagePath(c.imagePath)"></div>
                    <div v-if="c.subHeading" class="upper-container-content-subHeading"><h2>{{c.subHeading}}</h2></div>
                    <div v-if="c.subSubHeading" class="upper-container-content-subSubHeading">{{c.subSubHeading}}</div>
                    <div v-if="c.subSubContent" class="upper-container-content-subSubContent">{{c.subSubContent}}</div>
                    <p v-if="c.content" class="upper-container-content-content">{{c.content}}</p>
                    <p v-if="c.subContent" class="upper-container-content-subContent">{{c.subContent}}</p>
                    <ul v-if="c.list" class="upper-container-content-content-list">
                        <li v-for="i in c.list" v-bind:key="i">{{i}}</li>
                    </ul>
                </div>
               
            </div>
        </div>
    </div>

</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Template',
    data () {
        let items = ['Company Profile', 'Vision Mission']
        return {
            msg: 'Welcome to Your Vue.js App',
            items: this.menuItems,
            selectedItem: this.menuItems[0],
            content: this.content
        }
    },
    props: ['imagePath','heading', 'content', 'menuItems'],
    methods: {
        selectItem: function(event){
            console.log(this.selectedItem," ",event.target.innerHTML.toString().trim());
            this.selectedItem = event.target.innerHTML.toString().trim();
        },
        getImagePath(item) {
            // let images = require.context('../assets/images/', false)
            // return images(item)
            return require('../assets/images/'+item);
        },
        toggle: function(e){
            console.log(e.currentTarget)
            if(e.target.className=="accordian-row"){
                e.target.className="accordian-row-active"
            } else if(e.currentTarget.className=="accordian-row"){
                e.currentTarget.className=="accordian-row-active"
            }else if(e.target.className=="accordian-row-active"){
                e.target.className="accordian-row"
            } else if(e.currentTarget.className=="accordian-row-active"){
                e.currentTarget.className=="accordian-row"
            }

            // console.log(e)
        }
    },
    watch: { 
      	content: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          this.content = newVal;
        },
        menuItems: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          this.items = newVal;
          this.selectedItem = newVal[0];
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .body{
        position:fixed;
        width:100%;
        height: 100%;
        top:0;
        z-index: 0;
        /* background:; */
    }
    /* .bg{
        width:100%;
        height: 100%;
        background-color: black;
        opacity: 0.4;
    } */
    .content {
        overflow-y: scroll;
    }
    @media only screen and (min-width: 1024px) {
        .lower-container{
            width:100%;
            margin: 70px auto;
        }
        .upper-content{
            left: 20%;
            top: 80px;
            width: 55%;
            height: 75%;
        }
        .accordian-row,.accordian-row-active {
            font-size: 30px;
        }
    }
    @media only screen and (max-width: 1024px) {
        .lower-container{
            width: 100%;
            margin: 30px auto;
        }
        
        .upper-content{
            left: 25%;
            top: 150px;
            width: 65%;
            height: 65%;
        }
        .accordian-row,.accordian-row-active {
            font-size: 20px;
        }
        
    }
    @media only screen and (max-width: 700px) {
        h1{
            font-size: 16px;
        }
        h2{
            font-size: 14px;
        }
        h4{
            margin:0px;
            -webkit-margin-before: 0px !important;
            -webkit-margin-after: 0px !important;
        }
        p{
            font-size: 12px;
            line-height: 18px !important;
        }
        li{
            font-size: 11px;
            line-height: 14px !important;
        }
        .lower-container > *{
            font-size: 10px;
        }
        .upper-container > *{
            font-size: 12px !important;
        }
        .accordian-row,.accordian-row-active {
            font-size: 16px;
        }
    }
    .lower-container{
        /* width: 75%; */
        min-height: 35%;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        text-align: left;
        padding-bottom: 20px;
    }
    #logoimg{
        margin-right:10px;
        width:20%;
    }
    .lower-container-menu-header {
        font-family: Helvetica, sans-serif;
        color: #41A5FF;
        font-weight: 100;
        margin: 15px 10px;
        filter : hue-rotate(359deg) saturate(67%) brightness(41%);

    }
    .lower-container-content{
        width:20%;
        margin:100px 0px 0px 20px;
        text-align: left;
        /* text-align: center; */
    }
    .active {
        font-weight: bold;
    }
    .lower-container-menu{
        /* margin-bottom: 25px; */
        cursor: pointer;
        text-align: left;
        padding-left: 10%;
        white-space: pre-line;
    }

    .upper-content{
        background:#F5F5F5;
        margin: 70px auto;
        position: absolute;
        right: 0;
        border-radius: 25px;
        text-align: left;
        border:1px solid #41A5FF;
        overflow: scroll;
        font-family: 'Raleway'
    }
    .upper-container-content{
        padding:10px 30px;
        /* text-align: justify; */
    }
    .upper-container-content-content {
        line-height:30px;
        white-space: pre-wrap;
        text-align: justify;
    }
    .upper-container-content-content-list {
        line-height:30px;
        white-space: pre-line;
    }
    .header-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 60px;
    }
    #header-logo {
        filter : hue-rotate(359deg) saturate(67%) brightness(41%);
        /* width: 52px; */
        height: 60px;
        margin-left: 10px
    }
    .upper-container-content-subSubHeading {
        margin:0px !important;
        font-size: 12px;
        font-weight: 800;
    }
    .upper-container-content-subSubContent {
        margin-top: 10px !important;
        font-size: 12px;
    }
    .upper-container-content-subContent {
        font-size: 10px !important;
        color: #00000080
    }
    .accordian-row,.accordian-row-active {
        background: white;
        padding: 5px 10px;
        margin: 5px;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        cursor: pointer;
    }
    .accordian-row + div{
        display: none;
    }
    .accordian-row-active + div{
        display: unset;
    }
</style>
