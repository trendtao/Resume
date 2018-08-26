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
                 <baseinfo class="an"></baseinfo>   
                 <education class="an"></education>  
                 <work class="an"></work>
                 <project class="an"></project>
                 <person class="an"></person>
                <evaluation class="an"></evaluation>
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

   .fadeInUp {
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
    }

    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-backface-visibility: hidden;
    }

     .an1{
         animation-delay:0.2s
     }
     .an2{
         animation-delay:0.4s
     }
     .an3{
         animation-delay:0.6s
     }
     .an4{
         animation-delay:0.1s
     }
     .an5{
         animation-delay:0.4s
     }
     .an6{
         animation-delay:0.6s
     }


@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10%, 0);
        transform: translate3d(0, 10%, 0);
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10%, 0);
        transform: translate3d(0, 10%, 0);
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
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
    },
    mounted:function(){
        this.animateLoading("an")
    },
    methods:{
        animateLoading:function(className){
            var box = document.getElementsByClassName(className);
            this.animateListener(box);
            document.addEventListener('scroll', ()=>{
                this.animateListener(box);
            });
        },
        animateListener:function(box){
                //滚动条高度+视窗高度 = 可见区域底部高度
                var visibleBottom = window.scrollY + document.documentElement.clientHeight;
                //可见区域顶部高度
                var visibleTop = window.scrollY;
                for (var i = 0; i < box.length; i++) {
                    var centerY = box[i].offsetTop;
                    if (centerY > visibleTop & centerY < visibleBottom){
                        let an =  'animated fadeInUp an'+i;
                        let cla = box[i].getAttribute("class");
                        if(cla.indexOf("animated") ==-1){
                            box[i].setAttribute("class", cla+" "+an)
                        }
                     }
                }
        }
    }
}
</script>

