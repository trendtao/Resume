<template>
    <div class="container">
        <div  class="index">
            <div>
                <div>个人简历</div>
                <div>黄涛</div>
            </div>
            <img src="./images/banner.png">
        </div>
        <div class="content">
            <baseinfo></baseinfo>   
        </div>
    </div>
</template>

<style lang="less" scoped>
    .container{
        width: 768px;
        height: auto;
        margin: 0 auto;
        padding-top: 40px;
        background-color: #ffffff;
        -moz-box-shadow:-1px 5px 31px #989090;
        -webkit-box-shadow:-1px 5px 31px #989090;
        box-shadow:-1px 5px 31px #989090;
        margin-top: 29px;
        border-radius: 4px;
        height: 700px;
    }
    .content{
        margin-left: 62px;
        border-left: 1.5px solid #00B050;
        margin-top: -6px;
            height: 100%;
    }

    
    .index{
        div{
            display: inline;
            color: #00B050;
            margin-left: 26px;
            div:nth-child(1){
                font-size: 40px;
                padding-right: 25px;
                border-right: 2px solid #00B050;
            }

             div:nth-child(2){
                font-size: 23px;
            }
        }

        img{
            width: 100%;
            margin-top: 23px;
        }

    }
</style>

<script>
import baseinfo from "./component/baseinfo.vue"

export default {
     components: {
        'baseinfo': baseinfo,
    }
}
</script>

