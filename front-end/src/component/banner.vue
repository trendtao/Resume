<template>
    <div class="banner">
        <div>
            <img src="../images/ban.png">
            <span ref="name">{{name}}</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .banner>div:nth-child(1){
        position: relative;
        left: -16px;
        top: 7px;
        height: 43px;
        img{
            width: 100%;
        }
        span{
            position: relative;
            top: -35px;
            left: 19px;
            color: white;
        }
    }
</style>


<script>
export default {
   data:function(){
        return{
        }
    },
    props:{
        "name":String
    },
    mounted: function(){
       this.changePosition();
    },
    methods:{
        changePosition() {
            const USER_AGENT = navigator.userAgent.toLowerCase()
            const isChrome = /.*(chrome)\/([\w.]+).*/
            if(!isChrome.test(USER_AGENT)){
                this.$refs.name.style.top="-32px"
            }
        }
    }

}
</script>

