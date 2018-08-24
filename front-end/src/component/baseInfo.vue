<template>
    <div class="baseinfo">
       <banner name="基本信息"></banner>
        <div>
            <table class="tg">
                <tr>
                    <td >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</td>
                    <td >黄涛</td>
                    <td >出生年月：</td>
                    <td >1993.06</td>
                    <td  rowspan="5">
                        <img class="tou" src="../images/tou.png" alt="">
                    </td>
                </tr>
                <tr>
                    <td >民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</td>
                    <td >汉</td>
                    <td >英语能力：</td>
                    <td >4级</td>
                </tr>
                <tr>
                    <td >电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</td>
                    <td >18571562219</td>
                    <td >毕业院校：</td>
                    <td >湖北工程学院</td>
                </tr>
                <tr>
                    <td >邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</td>
                    <td >trendtao168@sina.com</td>
                    <td >专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：</td>
                    <td >计算机科学与技术</td>
                </tr>
                <tr>
                    <td >住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</td>
                    <td >贵州省遵义市</td>
                    <td >学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：</td>
                    <td >本科</td>
                </tr>
                </table>
        </div>
    </div>
</template>

<style lang="less" scoped>
.baseinfo{
    .tg .tou{
        width: 80px;
    }

    table{
        width: 100%;
        font-size: 14px;
        tr>td:nth-child(1){
            text-indent: 27px;
                width: 95px;
        }
        tr>td:nth-child(3){
            width: 73px;
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

