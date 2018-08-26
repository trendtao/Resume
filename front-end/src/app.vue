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
            <education></education>  
            <work></work>
            <project></project>
            <person></person>
            <evaluation></evaluation>
            <div class="footimg">
                <img src="./images/11.png" align="right">
            </div>
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
        margin-top: 60px;
        border-radius: 4px;
        margin-bottom: 73px;
    }
    .content{
        margin-left: 62px;
        border-left: 1px solid #00B050;
        margin-top: -6px;
        height: 100%;
        .footimg{
            height: 84px;
            margin-top: 131px;
        }

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
import education from "./component/education.vue"
import work from "./component/work.vue"
import project from "./component/project.vue"
import person from "./component/person.vue"
import evaluation from "./component/evaluation.vue"

export default {
     components: {
        'baseinfo': baseinfo,
        "education":education,
        "work":work,
        "project":project,
        "person":person,
        "evaluation":evaluation,
    }
}
</script>

