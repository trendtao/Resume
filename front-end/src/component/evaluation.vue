<template>
    <div class="evaluation">
        <banner name="自我评价"></banner>
        <ul>
            <li>能吃苦，能耐劳，敢于拼搏，能出差</li>
            <li>爱编程，熟练运用SSM，SSH框架，希望以后能够成为高级开发人员，其次再面向架构师</li>
            <li>喜欢钻研技术，能够长期从事Java开发行业</li>
            <li>喜欢与同行业的人交流技术，强化自己开发的能力</li>
            <li>能与公司共同进步，共同奋斗，一起努力</li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.evaluation{
    ul{
        padding-left: 50px;
        padding-right: 40px;
        font-size: 14px;
        li{
            text-align: justify;
            line-height: 25px;
            font-weight: bold;
        }
    }
}
</style>

<script>

import banner from "./banner.vue"

export default {
    
    components:{
        "banner":banner
    }

}
</script>
