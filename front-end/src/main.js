import 'babel-polyfill'
import Vue from "vue"
import app from "./app.vue"

import "./css/global.css"

var vm = new Vue({
    el:"#app",
    data:{
    },
    render:c=>c(app),
})